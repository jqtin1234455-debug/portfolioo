import "./globals.css";
import AppFrame from "../components/AppFrame";

export const metadata = {
  title: "Jatin Yadav | Full Stack Developer & Web Solutions | Nepal",
  description:
    "Official website of Jatin Yadav - Professional Full Stack MERN Developer, Frontend Specialist & IT Instructor in Rajbiraj, Saptari, Nepal. High-performance web development and digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        <AppFrame>{children}</AppFrame>
      </body>
    </html>
  );
}
