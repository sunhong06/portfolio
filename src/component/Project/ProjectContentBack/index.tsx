import React from 'react';
import styled from 'styled-components';
import ProjectTech from '../ProjectTech';
import ProjectWork from '../ProjectWork';

const BackDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  font-size: 12px;
  padding: 10px 15px;
  backface-visibility: hidden;
`;
const BackTitle = styled.h3`
  padding-bottom: 10px;
`;
const BackDetail = styled.span`
  display: inline-block;
  padding-bottom: 20px;
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  a {
  }
`;

const ProjectLink = styled.a`
  display: block;
  padding: 5px 15px;
  margin: 0 10px;
  cursor: pointer;
  color: #fff;
  background-color: #008cba;
  border-radius: 15px;
  &:hover {
    padding: 4px 14px;
    background-color: #fff;
    color: #008cba;
    border: 1px solid #008cba;
  }
`;

interface ContentBackProps {
  title: string;
  detail: string;
  tech: string[];
  work: string[];
  code: string;
  site: string;
}
const ProjectCotentBack: React.FC<ContentBackProps> = ({
  title,
  detail,
  tech,
  work,
  code,
  site,
}) => {
  return (
    <BackDiv>
      <BackTitle>⭐{title}</BackTitle>
      <BackDetail>{detail}</BackDetail>

      <ProjectTech tech={tech} />

      <ProjectWork work={work} />
      <BtnDiv>
        <ProjectLink href={code} target='_blank' rel='noreferrer'>
          Code
        </ProjectLink>
        <ProjectLink href={site} target='_blank' rel='noreferrer'>
          Site
        </ProjectLink>
      </BtnDiv>
    </BackDiv>
  );
};

export default ProjectCotentBack;
