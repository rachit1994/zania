'use client';
import { Inter } from "next/font/google";
import { SWRConfig } from 'swr';
import fallback from "./fallbackJson";
import fetcher from "./fetcher";

const inter = Inter({ subsets: ["latin"] });

const Body = ({ children }: {children: React.ReactNode}) => {
  return (
    <body className={inter.className}>
        <SWRConfig 
            value={{
              // should be added later
              // refreshInterval: 3000,
              fetcher,
              fallback
            }}
        >
          {children}
        </SWRConfig>
      </body>
  );
};

export default Body;

