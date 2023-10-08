import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CustomContainer from "@/components/CustomContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pet Finder",
  description: "App to find lost pets",
  icons: {
    icon: "/paw.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomContainer></CustomContainer>
      </body>
    </html>
  );
}
