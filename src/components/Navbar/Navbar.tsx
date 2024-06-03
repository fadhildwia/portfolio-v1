import Link from 'next/link';
import React, { useState } from 'react';

import { ButtonProps, NavbarProps } from './Navbar.type';

export const Navbar = ({ isTop }: NavbarProps) => {
  const [position, setPosition] = useState('home');

  const Button = ({ title, href, onClick }: ButtonProps) => {
    return (
      <Link
        href={href}
        onClick={() => onClick(href.replace('#', ''))}
        className={`py-4 px-7 hover:text-white w-full backdrop-blur-sm ${position === href.replace('#', '') && !isTop && 'bg-neutral-300/[0.2] rounded-full w-full'}`}
      >
        {title}
      </Link>
    );
  };

  return (
    <div
      className={`fixed mx-auto flex justify-center z-20 gap-1 rounded-full ${isTop ? 'text-gray-400 ' : 'text-white bg-neutral-300/[0.2]'}`}
    >
      <Button title="Home" href="#home" onClick={setPosition} />
      <Button title="About" href="#about" onClick={setPosition} />
      <Button title="Work" href="#work" onClick={setPosition} />
      <Button title="Writings" href="#writings" onClick={setPosition} />
      <Button title="Chat" href="#chat" onClick={setPosition} />
    </div>
  );
};
