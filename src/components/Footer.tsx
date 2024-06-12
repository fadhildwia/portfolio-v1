import React from 'react';

import { GithubIcon, LinkedInIcon, PenIcon } from '../../public/icons';

export const Footer = () => {
  return (
    <div className="border-t border-[#424242] text-[#bbb] text-xs py-5 flex justify-between items-center">
      <div>© 2024 Fadhilah</div>
      <div>
        <div className="flex gap-2 text-base">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/fadhilahdwiananda/"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="hover:text-blue-500" />
          </a>
          <a target="_blank" href="https://medium.com/@fadhilahdwi.a" rel="noopener noreferrer">
            <PenIcon className="hover:text-blue-500" />
          </a>
          <a target="_blank" href="https://github.com/fadhildwia" rel="noopener noreferrer">
            <GithubIcon className="hover:text-blue-500" />
          </a>
        </div>
      </div>
    </div>
  );
};
