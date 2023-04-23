import React from 'react';
import { Header } from './components/Header';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full bg-[#EBF2F7]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
