import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bicolage = Bricolage_Grotesque({subsets: ['latin'], weight: ["400", "800" ]})

export const metadata: Metadata = {
  title: "27Days - Get Rid of Your Addiction",
  description: "Generated by create next app",
  icons : {
    icon : ['./27dayslogo.png']
  } 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="" />
        </head>
      <body className={bicolage.className}>{children}</body>
    </html>
  );
}
