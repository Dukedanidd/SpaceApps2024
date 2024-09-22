

import "./globals.css";


export const metadata = {
  title: "Nebula Drift",
  description: "A No Sabemos Programar App",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Tiny5&display=swap" rel="stylesheet" />
        <meta charSet="utf-8" />
      </head>

      <body
       className="bg-gray-100 text-gray-900 font-tiny5"
      >
        {children}
      </body>
    </html>
  );
}
