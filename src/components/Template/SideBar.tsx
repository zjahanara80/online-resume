'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpg" alt="Zeynab Jahanara" width={300} height={200} priority />
        </Link>
        <header>
          <h2>زینب جهان آرا</h2>
          <p>
            <a href="mailto:zeynabjahanara80@gmail.com">zeynabjahanara80@gmail</a>
          </p>
        </header>
      </section>

      <section className="blurb" style={{ direction: 'rtl' }}>
        <h2>درباره من</h2>
        <p>
          سلام! من دانش‌آموخته‌ی رشته‌ی مهندسی نرم‌افزار از
          <a href="https://araku.ac.ir/"> دانشگاه فنی و حرفه‌ای اراک </a> هستم. از همان ابتدای مسیر
          تحصیلی، علاقه‌ی زیادی به دنیای برنامه‌نویسی داشتم و همین علاقه باعث شد وارد حوزه‌ی توسعه‌ی
          وب شوم.
          <br />
          در حال حاضر بیشتر تمرکزم روی طراحی و پیاده‌سازی رابط‌های کاربری مدرن و پویا با استفاده از
          JavaScript، React و فناوری‌های روز وب است. <br />
           هدف من ساخت تجربه‌های کاربری ساده، سریع و زیبا
          برای کاربران است.
        </p>

        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                روزمه ی من
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Zeynab&apos;Jahan ara <Link href="/">z-Jahan.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
