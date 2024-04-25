import Header from "@/components/Header";
import Footer from "@/components/Footer";
import './globals.css';
import NavMenu from "@/components/NavMenu";

export const metadata = {
  title: 'Portfolio Site',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
  <div>
    <Header NavMenu={<NavMenu />} />
    {children}
    <Footer />
  </div>
 );
}
