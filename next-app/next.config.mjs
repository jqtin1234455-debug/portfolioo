import { dirname } from "node:path";
import { promises as fsPromises } from "node:fs";
import { fileURLToPath } from "node:url";

const projectDirectory = dirname(fileURLToPath(import.meta.url));
const readlink = fsPromises.readlink.bind(fsPromises);

// On this Windows filesystem, readlink reports EISDIR for regular files.
fsPromises.readlink = async (...args) => {
  try {
    return await readlink(...args);
  } catch (error) {
    if (error?.code === "EISDIR") return null;
    throw error;
  }
};

const nextConfig = {
  distDir: ".next-webpack",
  outputFileTracingRoot: projectDirectory,
  webpack(config) {
    config.plugins.push({
      apply(compiler) {
        compiler.hooks.compilation.tap("ReadlinkErrorCompatibility", (compilation) => {
          const inputFileSystem = compilation.inputFileSystem;
          const readlink = inputFileSystem.readlink.bind(inputFileSystem);

          inputFileSystem.readlink = (path, callback) => {
            readlink(path, (error, target) => {
              if (error?.code === "EISDIR") {
                callback(null, null);
                return;
              }

              callback(error, target);
            });
          };
        });
      },
    });
    return config;
  },
  turbopack: {
    root: projectDirectory,
  },
};

export default nextConfig;
