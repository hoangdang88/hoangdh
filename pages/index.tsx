import Head from 'next/head';
import {
  IoBasketballOutline,
  IoChatbubbleEllipsesOutline,
  IoMapOutline,
  IoCameraOutline,
  IoGridOutline,
  IoCodeSlash,
} from 'react-icons/io5';
import React from 'react';
import Layout from '@/components/Layout';
import About from '@/components/About';

export default function Index() {
  const WDData = {
    wd: {
      title: 'Web Development',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem fuga nemo ducimus quas unde fugit deleniti nulla, fuga adipisci!',
    }
  };
  return (
    <>
      <Head>
        <title>Home :: HoangDH</title>
      </Head>
      <Layout border="border-2">
        <About />
      </Layout>
    </>
  );
}
{
  /* <style>
ion-icon {
  --ionicon-stroke-width: 16px;
}
</style> */
}
