import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Prestige Homes',
  description: 'Your dream home awaits.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
        <header className="bg-blue-600 p-4 text-white">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Prestige Homes
            </Link>
            <div>
              <Link href="/listings" className="text-lg mx-4 hover:text-blue-200">
                Browse Listings
              </Link>
              <Link href="/about" className="text-lg mx-4 hover:text-blue-200">
                About Us
              </Link>
              <Link href="/contact" className="text-lg mx-4 hover:text-blue-200">
                Contact Us
              </Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4 mt-8">
          &copy; {new Date().getFullYear()} X3 Homes. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
