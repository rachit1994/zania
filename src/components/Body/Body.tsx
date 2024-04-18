"use client";
import { StoreProvider } from "@/app/StoreProvider";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Body = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className={inter.className}>
      <StoreProvider>{children}</StoreProvider>
    </body>
  );
};

export default Body;
