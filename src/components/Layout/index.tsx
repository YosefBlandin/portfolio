import React from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
