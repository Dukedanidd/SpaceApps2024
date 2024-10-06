"use client"
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tiny5&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
      </head>

      <body className="bg-gray-100 text-gray-900 font-tiny5 w-screen h-screen">
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
