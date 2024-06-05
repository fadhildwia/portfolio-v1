import { AboutSection } from '@components/AboutSection';
import { HomeSection } from '@components/HomeSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto w-full min-h-screen flex-col justify-center items-center">
      <Image src="/images/hero-bg.png" alt="star" fill />
      <Image src="/images/gradient.webp" alt="star" fill />
      <HomeSection />
      <AboutSection />
    </div>
  );
}
