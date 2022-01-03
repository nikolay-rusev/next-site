import Head from 'next/head';

import { Header } from '@components/header';
import Navigation from '@components/navigation';

export default function Page() {
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
