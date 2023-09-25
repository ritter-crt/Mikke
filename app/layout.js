import Footer from '@/components/Footer';
import Nav from '../components/Nav';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mikke Studio',
  description: 'Collared shirts are our foundation ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <Nav></Nav>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
