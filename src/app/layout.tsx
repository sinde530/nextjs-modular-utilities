import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './darkMode/ThemeProvider';
import { ThemeToggle } from './darkMode/ThemeToggle';
import { MainLayout } from './components/layout/MainLayout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NextJs Modular Utilities',
  description: 'NextJs Modular Utilities',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
