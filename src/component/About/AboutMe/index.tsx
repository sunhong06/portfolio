import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
  text-align: center;
  font-size: 2.3rem;
  line-height: 1.5;
  font-weight: 600;
  margin-bottom: 50px;
  -webkit-animation: focus-in-contract 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: focus-in-contract 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @-webkit-keyframes focus-in-contract {
    0% {
      letter-spacing: 1em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes focus-in-contract {
    0% {
      letter-spacing: 1em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

const AboutMe: React.FC = () => {
  return (
    <MyDiv>
      안녕하세요!
      <br />
      신입 프론트엔드개발자 김선홍입니다.
    </MyDiv>
  );
};

export default AboutMe;
