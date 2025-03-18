import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "Bull City Running Co.",
  description:
    "Welcome to Bull City Running Co, Durham's premier run specialty store!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}
