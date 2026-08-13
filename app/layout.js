import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/Footer/Footer";
import { content } from "@/tailwind.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "pigeonspower",
  description:
    "pigeonspower is an Australian electrical consutancy company situated in  1-Chindwin Place, Roxburgh Park-3064, Australia Business details are Phone:+61 419 663 260 and Email:info@pigeonspower.com , Website: Pigeonspower.com.au ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
