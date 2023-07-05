import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { PropsWithChildren } from 'react';
import './global.css';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="loading">
          <Navbar />
          <main
            id="skip"
          >
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
