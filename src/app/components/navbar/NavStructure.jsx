import Link from 'next/link';
import React from 'react';

const NavStructure = ({children, href}) => {
  return (
    <div>
      <li>
        <Link href={href}>{children}</Link>
      </li>
    </div>
  );
};

export default NavStructure;