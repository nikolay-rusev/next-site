import Head from 'next/head';

import { Header } from '@components/header';
import Navigation from '@components/navigation';

export default function Home() {
  return (
    <>
      <Head>
        <title>All about NextJS</title>
      </Head>
      <main>
        <Header />
        <Navigation />
      </main>
    </>
  );
}
