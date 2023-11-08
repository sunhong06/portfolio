import React from 'react';
import styled from 'styled-components';
import { FaUserAlt, FaHome, FaBirthdayCake, FaGithub } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const ProfileDiv = styled.div`
  width: 75rem;
  height: 400px;
  background-color: #fff;
  margin: 0 auto;
  box-shadow: 0px 0px 5px #444;
  @media screen and (max-width: 1024px) {
    width: 650px;
  }
`;

const ProfileTitle = styled.h2`
  padding-top: 2rem;
  font-size: 40px;
  text-align: center;
`;
const InnerDiv = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    margin: 2rem 0;
  }
`;
const MyInfoList = styled.div`
  width: 400px;
`;
const MyInfo = styled.li`
  font-size: 20px;
  margin: 8px 0;
`;
const MyInfoSpan = styled.span`
  padding-left: 2rem;
`;
const PictureDiv = styled.div`
  margin: 0 auto;
`;
const MyImg = styled.img`
  width: 12rem;
`;

const AboutProfile: React.FC = () => {
  return (
    <ProfileDiv>
      <ProfileTitle>ABOUT</ProfileTitle>
      <InnerDiv>
        <PictureDiv>
          <MyImg
            src={process.env.PUBLIC_URL + '/imgs/김선홍.jpg'}
            alt='김선홍'
          />
        </PictureDiv>
        <div>
          <MyInfoList>
            <MyInfo>
              <FaUserAlt />
              <MyInfoSpan>김선홍</MyInfoSpan>
            </MyInfo>
            <MyInfo>
              <FaBirthdayCake />
              <MyInfoSpan>1995.01.06</MyInfoSpan>
            </MyInfo>
            <MyInfo>
              <IoMdCall />
              <MyInfoSpan>010-3211-0355</MyInfoSpan>
            </MyInfo>
            <MyInfo>
              <MdEmail />
              <MyInfoSpan>kongsunk@nate.com</MyInfoSpan>
            </MyInfo>
            <MyInfo>
              <FaHome />
              <MyInfoSpan>서울특별시 양천구</MyInfoSpan>
            </MyInfo>
            <MyInfo>
              <FaGithub />
              <MyInfoSpan>GitHub</MyInfoSpan>
            </MyInfo>
          </MyInfoList>
        </div>
      </InnerDiv>
    </ProfileDiv>
  );
};

export default AboutProfile;
