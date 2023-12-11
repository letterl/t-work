import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import SysNavbar from "./_components/SysNavbar";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "WorkTool",
  description: "dev by liekkas20",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`font-sans ${inter.variable}`}>
        <Providers>
          <TRPCReactProvider cookies={cookies().toString()}>
            <SysNavbar></SysNavbar>
            {children}
          </TRPCReactProvider>
        </Providers>
      </body>
    </html>
  );
}
