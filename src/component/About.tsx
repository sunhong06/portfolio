import React from 'react';
import { styled } from 'styled-components';
import { FaUserAlt, FaHome, FaBirthdayCake, FaGithub } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const AboutDiv = styled.section`
  padding: 100px 0;
  border-bottom: 2px dashed #999;
`;
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
const DetailDiv = styled.div`
  p {
    text-align: center;
    font-size: 1rem;
    color: #888;
    line-height: 2;
    letter-spacing: -0.2px;
  }
  margin-bottom: 150px;
`;
const ProfileDiv = styled.div`
  width: 850px;
  height: 400px;
  background-color: #fff;
  margin: 0 auto;
  box-shadow: 0px 0px 5px #444;
  @media screen and (max-width: 1024px) {
    width: 650px;
  }
  h2 {
    padding-top: 30px;
    font-size: 40px;
    text-align: center;
  }
`;
const InnerDiv = styled.div`
  display: flex;
  margin: 30px 50px;
  align-items: center;
  @media screen and (max-width: 1024px) {
    margin: 30px 0;
  }
  ul {
    width: 400px;
    li {
      font-size: 20px;
      margin: 8px 0;
      span {
        padding-left: 30px;
      }
    }
  }
`;

const PictureDiv = styled.div`
  margin: 0 auto;
  img {
    width: 200px;
  }
`;

const About: React.FC = () => {
  return (
    <AboutDiv id='1'>
      <MyDiv>
        <span>
          안녕하세요!
          <br />
          신입 프론트엔드개발자 김선홍입니다.
        </span>
      </MyDiv>
      <DetailDiv>
        <p>
          저는 친구의 추천으로 개발자를 시작하였고, 국비교육을 들으며 기초를
          탄탄하게 다진 후 개인적으로 독학을 하고있습니다.
        </p>
        <p>
          국비교육을 통해 HTML, CSS 및 JavaScript를 사용하여 기본적인 웹
          페이지를 만들 수 있고, React와 같은 프레임워크를 학습하여 컴포넌트
          기반의 개발 방식을 이해하고 있습니다.
        </p>
        <p>
          또한 개인적인 프로젝트 제작 할때 코드의 안정성과 버그를 사전에 방지 할
          수 있는 타입스크립트를 공부하여 적용하였고,
        </p>
        <p>
          복잡한 상태관리로 리덕스를 공부하여 적용했습니다. 이를 통해 컴포넌트
          간의 데이터 흐름을 좀 더 체계적으로 관리하고 유지보수를 수월하게 할 수
          있었습니다.
        </p>
        <p>
          아직 신입이기에 공부해야할것도 많고 많이 부족하지만 항상 노력하고
          새로운것을 알아가는 개발자가 되겠습니다.
        </p>
      </DetailDiv>
      <ProfileDiv>
        <h2>ABOUT</h2>
        <InnerDiv>
          <PictureDiv>
            <img
              src={process.env.PUBLIC_URL + '/imgs/김선홍.jpg'}
              alt='김선홍'
            />
          </PictureDiv>
          <div>
            <ul>
              <li>
                <FaUserAlt />
                <span>김선홍</span>
              </li>
              <li>
                <FaBirthdayCake />
                <span>1995.01.06</span>
              </li>
              <li>
                <IoMdCall />
                <span>010-3211-0355</span>
              </li>
              <li>
                <MdEmail />
                <span>kongsunk@nate.com</span>
              </li>
              <li>
                <FaHome />
                <span>서울특별시 양천구</span>
              </li>
              <li>
                <FaGithub />
                <span>GitHub</span>
              </li>
            </ul>
          </div>
        </InnerDiv>
      </ProfileDiv>
    </AboutDiv>
  );
};

export default About;
