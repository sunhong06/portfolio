import React from 'react';
import styled from 'styled-components';

const TechDiv = styled.div`
  width: 100%;
`;
const TechTitle = styled.h4`
  padding-right: 3px;
  padding-bottom: 3px;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
`;

const TechInfo = styled.li`
  padding: 0 3px;
`;
interface TechProps {
  tech: string[];
}

const ProjectTech: React.FC<TechProps> = ({ tech }) => {
  return (
    <TechDiv>
      <TechTitle>🔥 tech</TechTitle>
      <TechList>
        {tech.map((Techlist, index) => (
          <TechInfo key={index}>{Techlist}</TechInfo>
        ))}
      </TechList>
    </TechDiv>
  );
};

export default React.memo(ProjectTech);
