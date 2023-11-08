import React from 'react';
import styled from 'styled-components';

const WorkDiv = styled.div`
  padding-bottom: 20px;
`;
const WorkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const WorkInfo = styled.li`
  padding: 0 3px;
`;
const WorkTitle = styled.h4`
  padding-right: 3px;
  padding-bottom: 3px;
`;

interface WorkProps {
  work: string[];
}
const ProjectWork: React.FC<WorkProps> = ({ work }) => {
  return (
    <WorkDiv>
      <WorkTitle>🔥 work</WorkTitle>
      <WorkList>
        {work.map((workList, index) => (
          <WorkInfo key={index}>{workList}</WorkInfo>
        ))}
      </WorkList>
    </WorkDiv>
  );
};

export default React.memo(ProjectWork);
