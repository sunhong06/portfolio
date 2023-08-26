import React from 'react';
import { styled } from 'styled-components';
import { SiTypescript, SiFirebase, SiRedux } from 'react-icons/si';
import { BiLogoJavascript } from 'react-icons/bi';
import { FaHtml5, FaCss3Alt, FaGithub, FaSass } from 'react-icons/fa';

const SkillsDiv = styled.section`
  padding: 100px 0;
  border-bottom: 2px dashed #999;
`;
const TitleH2 = styled.h2`
  font-size: 40px;
  text-align: center;
  margin-bottom: 50px;
`;
const InnerSkillsDiv = styled.div`
  ul {
    width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    li {
      min-width: 200px;
      width: 200px;
      display: flex;
      align-items: center;
      flex-direction: column;
      background-color: #f2f2f2;
      padding: 20px 0;
      margin: 30px;
      border-radius: 20px;
      svg {
        font-size: 60px;
        margin-bottom: 5px;
      }
      span {
        font-size: 20px;
      }
    }
  }
`;

const Skills: React.FC = () => {
  return (
    <SkillsDiv id='2'>
      <InnerSkillsDiv>
        <TitleH2>SKILLS</TitleH2>
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
      </InnerSkillsDiv>
    </SkillsDiv>
  );
};

export default Skills;
