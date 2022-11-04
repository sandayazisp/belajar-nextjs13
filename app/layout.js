import Link from "next/link";
import React from "react";
import { Caveat } from '@next/font/google';


const caveat = Caveat();

export default function RootLayout({ children }) {
    return (
      <html lang="en" className={caveat.className}>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>NextJS-13</title>
        </head>
        <body>
          <div style={{fontSize: '24px'}}>
                <Link href={'/'} style={{padding: '20px'}}>Home</Link>
                <Link href={'/blog'}>Lihat blog</Link>
            </div>
          {children}
        </body>
      </html>
    );
  }