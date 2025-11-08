
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import routes from '../../data/routes';
import Hamburger from './Hamburger';

const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <header id="header">
      <h1 className="index-link">
        {routes
          .filter((l) => l.index)
          .map((l) => (
            <Link key={l.label} href={l.path}>
              {l.label}
            </Link>
          ))}
      </h1>
      <nav className="links">
        <ul>
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <li key={l.label}>
                {l.label === 'دانلود رزومه ' || l.label === 'دانلود رزومه'? (
                  <a href="/resume.pdf" download="zeynab-Jahanara-Resume.pdf">
                    {l.label}
                  </a>
                ) : (
                  <Link
                    href={l.path}
                    className={pathname === l.path ? 'active-link' : ''}
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
        </ul>
      </nav>
      <Hamburger />
    </header>
  );
};

export default Navigation;
