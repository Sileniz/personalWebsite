import type { Metadata } from "next";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import localFont from "next/font/local";
import "./globals.css";


export const metadata: Metadata = {
  title: "Portfolio Walisson",
  description: "Site portfolio de desenvolvedor web",
  authors: [{"name": "Walisson (Sileniz)", "url": "github.com/sileniz"}],
  keywords: ["React", "NextJS", "Web Developer", "Portfolio"],
  creator: "Walisson (Sileniz)"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
