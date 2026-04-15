import { Geist, Geist_Mono } from "next/font/google";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Miniwell Fire Safety Solutions",
  description: "Miniwell Fire Safety Solutions provides reliable fire protection services, equipment installation, maintenance, and safety compliance solutions for businesses and homes.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
