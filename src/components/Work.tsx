import { projectItems } from 'constant/workData';
import React from 'react';

import { GithubIcon, LinkIcon } from '../../public/icons';

interface CardProps {
  github?: string;
  link?: string;
  title: string;
  stack: Array<string>;
}

const Card = ({ github, link, title, stack }: CardProps) => {
  return (
    <div
      onClick={() => window.open(link)}
      className="transition ease-in-out delay-100 h-[200px] rounded p-7 bg-[#1C1C1C] shadow-md relative border border-[#1C1C1C] hover:border-[#424242] cursor-pointer"
    >
      <div className="absolute top-0 left-0 w-[25%] h-full bg-gradient-to-r from-[#858585]/[0.05] to-[#1C1C1C] z-10"></div>
      <div className="items-center flex flex-col gap-5 flex-1 h-full w-full">
        <div className="flex gap-4 ms-auto">
          {github && (
            <a target="_blank" href={github} rel="noopener noreferrer">
              <GithubIcon className="hover:text-blue-500" />
            </a>
          )}
          {link && (
            <a target="_blank" href={link} rel="noopener noreferrer">
              <LinkIcon className="hover:fill-blue-500" />
            </a>
          )}
        </div>
        <h1 className="text-1xl z-20">{title}</h1>
        <h1 className="mt-auto text-[#bbb] flex flex-wrap gap-x-6 z-20">
          {stack?.map((item, index) => <div key={index}>{item}</div>)}
        </h1>
      </div>
    </div>
  );
};

export const Work = () => {
  return (
    <div id="work">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="grid grid-cols-fr sm:grid-cols-2 gap-2 mt-8">
        {projectItems.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
