import React from 'react';
import styled from 'styled-components';

interface imgChange {
  $image: string;
}

interface PrevToogle {
  $active: boolean;
}

const InfoDiv = styled.div<PrevToogle>`
  display: ${(props) => (props.$active ? 'none' : 'block')};
  // background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  padding: 30px;
  &:after {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
  }
`;
const FrontTitle = styled.h3`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
`;

const FrontBtn = styled.button`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-60%, -50%);
  color: red;
  font-size: 12px;
  border: none;
  background-color: transparent;
`;

const FrontDiv = styled.div<imgChange>`
  width: 100%;
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL}/imgs/${(props) =>
    props.$image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotateY(180deg);
`;
interface ContentFrontProps {
  image: string;
  active: boolean;
  title: string;
}

const ProjectCotentFront: React.FC<ContentFrontProps> = ({
  image,
  active,
  title,
}) => {
  return (
    <>
      <FrontDiv $image={image}>
        <InfoDiv $active={active}>
          <FrontTitle>{title}</FrontTitle>
          <FrontBtn>CLICK</FrontBtn>
        </InfoDiv>
      </FrontDiv>
    </>
  );
};

export default ProjectCotentFront;
