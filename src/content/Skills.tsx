import React from 'react';
import { styled } from 'styled-components';
import SkillList from '../component/Skills/SkillList';

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
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    li {
      width: 180px;
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
        <SkillList />
      </InnerSkillsDiv>
    </SkillsDiv>
  );
};

export default Skills;
