import Link from 'next/link';
import React from 'react';

const NavStructure = ({children, href, className}) => {
  return (
    <div>
      <li>
        <Link href={href} className={`${className} ${className= 'text-red-500'}`}>{children}</Link>
      </li>
    </div>
  );
};

export default NavStructure;