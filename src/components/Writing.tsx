import { writingItems } from 'constant/writingData';
import React from 'react';

interface CardProps {
  title: string;
  date: string;
  coffee: number;
  time: string;
  description: string;
  link: string;
}

const Card = ({ title, date, coffee, time, description, link }: CardProps) => {
  return (
    <div
      onClick={() => window.open(link)}
      className="transition ease-in-out delay-100 h-[150px] rounded p-3 bg-[#1C1C1C] shadow-md relative border border-[#1C1C1C] hover:border-[#424242] cursor-pointer"
    >
      <div className="absolute top-0 left-0 w-[25%] h-full bg-gradient-to-r from-[#858585]/[0.05] to-[#1C1C1C] z-10"></div>
      <div className="flex flex-col gap-2 flex-1 h-full w-full">
        <h1 className="text-1xl z-20">{title}</h1>
        <div className="z-10 text-sm text-[#bbb] flex flex-col gap-2">
          <div className="sm:flex gap-1 sm:gap-2">
            <span>{date}</span>
            <span className="opacity-0 sm:opacity-100">•</span>
            <div className="flex sm:flex gap-1">
              <div>{'☕️'.repeat(coffee)}</div>
              <div>{time}</div>
            </div>
          </div>
          <div className="truncate w-60 sm:w-full">{description}</div>
        </div>
      </div>
    </div>
  );
};

export const Writing = () => {
  return (
    <div id="writings" className="mb-32">
      <h1 className="text-2xl font-semibold">Some of my writings</h1>
      <div className="grid grid-cols-fr sm:grid-cols-2 gap-2 mt-8">
        {writingItems.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
