import React, { useState } from 'react';
import { styled } from 'styled-components';
import ProjectCotentFront from '../ProjectContentFront';
import ProjectCotentBack from '../ProjectContentBack';

interface backToogle {
  $back: boolean;
}

const FlipDiv = styled.div<backToogle>`
  background: #fff;
  height: 300px;
  perspective: 1000px;
  width: 300px;
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  position: relative;
  margin: 10px;
  transform-style: preserve-3d;
  transition: all ease 1s;
  transform: ${(props) => (props.$back ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

interface ProjectContentProps {
  title: string;
  detail: string;
  tech: string[];
  work: string[];
  code: string;
  site: string;
  image: string;
}

const ProjectContent: React.FC<ProjectContentProps> = ({
  title,
  detail,
  tech,
  work,
  code,
  site,
  image,
}) => {
  const [active, setActive] = useState(true);
  const [back, setBack] = useState(true);

  return (
    <FlipDiv
      $back={back}
      onClick={() => setBack(() => !back)}
      onMouseOver={() => setActive(false)}
      onMouseOut={() => setActive(true)}
    >
      <ProjectCotentFront image={image} title={title} active={active} />
      <ProjectCotentBack
        title={title}
        detail={detail}
        tech={tech}
        work={work}
        code={code}
        site={site}
      />
    </FlipDiv>
  );
};

export default React.memo(ProjectContent);
