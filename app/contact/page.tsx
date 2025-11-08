import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';

import PageWrapper from '../components/PageWrapper';

export const metadata: Metadata = {
  title: 'تماس با من',
  description: "",
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link href="/contact">تماس با من</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>ایمیل : zeynabjahanara80@gmail.com</p>
          <p>لینکدین : in/zeynab-jahanara</p>
          <p>گیت هاب : github.com/zjahanara80</p>
          <EmailLink />
        </div>
        <ContactIcons />
      </article>
    </PageWrapper>
  );
}
