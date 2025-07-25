import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NEXUS - Future Digital Solutions',
  description: 'Transforming ideas into extraordinary digital experiences with cutting-edge technology and innovative design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProgress />
        {children}
        <Footer />
      </body>
    </html>
  );
}
