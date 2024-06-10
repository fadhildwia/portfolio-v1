import { aboutData, experienceItems, skillItems } from 'constant/aboutData';
import React from 'react';

import { LinkIcon } from '../../public/icons';

export const AboutSection = () => {
  return (
    <div id="about" className="flex flex-col gap-32 mb-32">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="font-light text-zinc-400">{aboutData}</p>
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
        <h1 className="text-2xl font-semibold mb-5">Experience</h1>
        {experienceItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-1 font-light text-sm text-[#bbb] flex-wrap sm:flex-nowrap gap-2"
          >
            <div className="w-56">{item.date}</div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="text-[#EDEDED] font-semibold">{item.companyName}</div>
                <div onClick={() => {}}>
                  <LinkIcon className="fill-blue-400" />
                </div>
              </div>
              <div className="text-[#EDEDED] font-semibold">{item.jobTitle}</div>
              <div className="my-1">{item.description}</div>
              <div className="flex items-center flex-wrap gap-2">
                {item.tech.map((techItem, techIndex) => (
                  <div
                    key={techIndex}
                    className="px-[6px] py-[4px] border border-1 border-blue-400 shadow text-blue-400"
                  >
                    {techItem}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
