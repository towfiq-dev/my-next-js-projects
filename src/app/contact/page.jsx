import { Roboto } from 'next/font/google';
import React from 'react';
const roboto = Roboto({
    weight: '900',
    subsets: ['latin']
  })
const ContactPage = () => {
  
  return (
    <div className={roboto.className}>
      <h1>This is Contact page</h1>
    </div>
  );
};

export default ContactPage;