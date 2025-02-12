import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QueryClientProvider } from "@tanstack/react-query";
import QueryProvider from "@/components/queryProvider";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "sonner";
import { StrategyProvider } from "@/contexts/StrategyContext";
const inter = Inter({ subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export const metadata: Metadata = {
  title: "27Days - Get Rid of Your Addiction",
  description: "Get Rid of your Addictions",
  icons: {
    icon: ["27dayslogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="27dayslogo.png" />
      </head>
      <body className={bricolage.className}>
        <QueryProvider>
          <StrategyProvider>
            <Wrapper>
              <Toaster richColors position="top-center" duration={3000}/>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </Wrapper>
          </StrategyProvider>
        </QueryProvider>
        <Analytics/>

      </body>
    </html>
  );
}
