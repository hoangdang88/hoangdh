import React from 'react';
import {
  IoBasketballOutline,
  IoCameraOutline,
  IoChatbubbleEllipsesOutline,
  IoMapOutline,
} from 'react-icons/io5';

export default function About() {
  return (
    <>
      <h1 className="text-lg font-semibold my-2">About Me</h1>
      <div className="flex flex-col mb-4 text-lg tracking-wide gap-y-4 px-4">
        <p>
        My primary goal is to apply my technical expertise all throughout the full
software life cycle to ensure production and delivery of products and services
that meet client specifications. Along with a competent software developing
team, and with strong personal knowledge, skills, and experience in software
engineering, I am positive that this goal can be achieved. My experience as
junior software developer enhanced my abilities in designing, implementing,
testing, and upgrading software. One of my objectives is to keep updated with
the latest IT trends and technologies. I am confident that if given the
opportunity, I can be a useful talent to the company.
        </p>
        
      </div>
    </>
  );
}
