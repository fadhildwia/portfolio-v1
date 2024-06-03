import { Navbar } from '@components/Navbar';
import { HomeSection } from '@components/Section/HomeSection';
import { Inter } from 'next/font/google';
import { useCallback, useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isTop, setIsTop] = useState(false);

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    setIsTop(scrollY === 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-between p-7 ${inter.className}`}
    >
      <Navbar isTop={isTop} />
      <div className="mt-10">
        <HomeSection />
      </div>
    </div>
  );
}
