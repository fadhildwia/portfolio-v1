import { AboutSection } from '@components/AboutSection';
import { HomeSection } from '@components/HomeSection';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mx-5 sm:container sm:mx-auto w-full min-h-screen flex-col justify-center items-center">
      <Head>
        <title>Fadhilah Dwi Ananda</title>
      </Head>
      <Image src="/images/hero-bg.png" alt="star" fill />
      <Image src="/images/gradient.webp" alt="star" fill />
      <HomeSection />
      <AboutSection />
    </div>
  );
}
