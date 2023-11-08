import React from 'react';
import { SiTypescript, SiFirebase, SiRedux } from 'react-icons/si';
import { BiLogoJavascript } from 'react-icons/bi';
import { FaHtml5, FaCss3Alt, FaGithub, FaSass } from 'react-icons/fa';

const SkillList: React.FC = () => {
  return (
    <ul>
      <li>
        <FaHtml5 color='#e34f26' />
        <span>HTML5</span>
      </li>
      <li>
        <FaCss3Alt color='#1572B6' />
        <span>CSS3</span>
      </li>
      <li>
        <BiLogoJavascript color='#F7DF1E' />
        <span>Javascript</span>
      </li>
      <li>
        <SiTypescript color='#3178C6' />
        <span>Typescript</span>
      </li>
      <li>
        <FaSass color='#CC6699' />
        <span>SCSS</span>
      </li>
      <li>
        <SiFirebase color='#FFCA28' />
        <span>Firebase</span>
      </li>
      <li>
        <SiRedux color='#764ABC' />
        <span>Redux</span>
      </li>
      <li>
        <FaGithub color='#181717' />
        <span>Git</span>
      </li>
    </ul>
  );
};

export default SkillList;
