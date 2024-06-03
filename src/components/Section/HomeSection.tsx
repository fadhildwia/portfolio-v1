import React from 'react';

export const HomeSection = () => {
  return (
    <div
      id="home"
      className="bg-[url('/images/hero-bg.png')] bg-no-repeat bg-cover absolute mx-auto left-0 right-0 top-10 w-full h-full max-h-[400px] max-w-[1200px] flex flex-col justify-center items-center"
    >
      <h1 className="flex flex-col items-center md:text-7xl text-3xl font-bold">
        <span>Hello. I'm Fadhil.</span>
        <span className="bg-gradient-to-b from-blue-500 to-blue-900 inline-block text-transparent bg-clip-text">
          A Coder
        </span>
      </h1>
      <p className="text-gray-400 text-center mx-2">
        I passionate about build things for web and mobile apps.
      </p>
    </div>
  );
};
