import React from 'react';
import propTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="h-screen">
      <Header />
      <main className="h-[90%]">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: propTypes.object,
}.isRequired;
