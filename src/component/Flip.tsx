import React, { useState } from 'react';
import { styled } from 'styled-components';

interface PrevToogle {
  $active: boolean;
}
interface backToogle {
  $back: boolean;
}
interface imgChange {
  $image: string;
}

const FlipDiv = styled.div<backToogle>`
  background: #fff;
  height: 300px;
  perspective: 1000px;
  width: 320px;
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  position: relative;
  margin: 40px;
  transform-style: preserve-3d;
  transition: all ease 1s;
  transform: ${(props) => (props.$back ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;
const FrontDiv = styled.div<imgChange>`
  width: 100%;
  height: 100%;
  background-image: url(imgs/${(props) => props.$image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotateY(180deg);
`;
const BackDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  font-size: 12px;
  padding: 10px 15px;
  backface-visibility: hidden;
  h3 {
    padding-bottom: 10px;
  }
  p {
    padding-bottom: 20px;
  }
`;
const TechDiv = styled.div`
  h4 {
    padding-right: 3px;
    padding-bottom: 3px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    li {
      padding: 0 3px;
    }
  }
`;
const InfoDiv = styled.div<PrevToogle>`
  display: ${(props) => (props.$active ? 'none' : 'block')};
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  padding: 30px;
  &:after {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
  }
  h3 {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
  span {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-60%, -50%);
    color: red;
    font-size: 12px;
  }
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  a {
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
  }
`;
const WorkDiv = styled.div`
  padding-bottom: 20px;
  h4 {
    padding-right: 3px;
    padding-bottom: 3px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      padding: 0 3px;
    }
  }
`;
interface flip {
  title: string;
  detail: string;
  tech: string[];
  work: string[];
  code: string;
  site: string;
  image: string;
}

const Flip: React.FC<flip> = ({
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
      <FrontDiv $image={image}>
        <InfoDiv $active={active}>
          <h3>{title}</h3>
          <span>CLICK</span>
        </InfoDiv>
      </FrontDiv>
      <BackDiv>
        <h3>⭐{title}</h3>
        <p>{detail}</p>
        <TechDiv>
          <h4>🔥 tech</h4>
          <ul>
            {tech.map((Techlist, index) => (
              <li key={index}>{Techlist}</li>
            ))}
          </ul>
        </TechDiv>
        <WorkDiv>
          <h4>🔥 work</h4>
          <ul>
            {work.map((workList, index) => (
              <li key={index}>{workList}</li>
            ))}
          </ul>
        </WorkDiv>
        <BtnDiv>
          <a href={code} target='_blank' rel='noreferrer'>
            Code
          </a>
          <a href={site} target='_blank' rel='noreferrer'>
            Site
          </a>
        </BtnDiv>
      </BackDiv>
    </FlipDiv>
  );
};

export default Flip;
