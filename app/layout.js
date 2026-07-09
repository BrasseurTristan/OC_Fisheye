import {DM_Sans } from "next/font/google";
import "./globals.css";

const DmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fisheye",
  description: "Site de photographes freelances",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${DmSans.variable} `}>
      <body>{children}</body>
    </html>
  );
}
