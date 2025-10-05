import { Ovo, Outfit } from "next/font/google";
import "./globals.css";
import logo from "../assets/logo.png";

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: ["400"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400"],
});


export const metadata = {
  title: "Ankit-Kumar",
  description: "Portfolio website of Ankit Kumar",
  icons: {
    icon:logo.src,  
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ovo.variable} ${outfit.variable} antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
