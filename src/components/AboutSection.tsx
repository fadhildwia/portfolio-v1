import React from 'react';

const skillItems = [
  'React',
  'React Native',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'Sass',
  'Tailwind',
  'Material-UI',
  'Git',
  'Framer Motion',
  'Styled-Components',
  'Vue.js',
  'Svelte.js',
  'Express.js',
  'Firebase',
  'Jest',
  'Scrum',
  'Node.js',
  'Nuxt.js',
  'Postman'
];

export const AboutSection = () => {
  return (
    <div id="about" className="flex flex-col gap-40">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="font-light text-zinc-400">
          I am an experienced front-end developer with 3+ years of experience. I specialize in
          designing and developing visually appealing and responsive user interfaces. Throughout my
          career, I have successfully collaborated with teams to deliver innovative and user-focused
          solutions. I have a strong ability to learn quickly and I am always seeking opportunities
          to deepen my knowledge and improve my IT skills. I am ready to leverage my technical
          expertise to benefit others and organizations
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Skills</h1>
        <div className="flex font-light text-sm text-[#bbb] gap-2 flex-wrap">
          {skillItems.map((item, index) => (
            <span key={index} className="p-[6px] bg-[#232323] border border-1 border-[#333] shadow">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Experience</h1>
        <div className="flex font-light text-sm text-[#bbb] gap-2 flex-wrap"></div>
      </div>
    </div>
  );
};
