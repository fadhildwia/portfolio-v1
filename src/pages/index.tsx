import { Navbar } from '@components/Navbar';
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
  }, []);

  return (
    <div
      className={`flex min-h-screen h-[5000px] flex-col items-center justify-between p-7 ${inter.className}`}
    >
      <Navbar isTop={isTop} />
      <div id="home" className="mt-[1000px]">
        Home
      </div>
    </div>
  );
}
