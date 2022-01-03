import Head from 'next/head';
import { ReactNode } from 'react';

import { Header } from '@components/header';
import Navigation from '@components/navigation';

type PageProps = {
  children?: ReactNode;
};

export default function Page({ children }: PageProps) {
  return (
    <>
      <Head>
        <title>All about NextJS</title>
      </Head>
      <main>
        <Header />
        <Navigation />
        {children}
      </main>
    </>
  );
}
