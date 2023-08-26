import React from 'react';
import { styled } from 'styled-components';
import Flip from './Flip';

const ProjectsDiv = styled.section`
  padding: 100px 0;
  border-bottom: 2px dashed #999;
`;
const ContentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 1300px;
  margin: 0 auto;
`;
const ProjectTitle = styled.h2`
  font-size: 40px;
  text-align: center;
  margin-bottom: 50px;
`;

const Projects: React.FC = () => {
  return (
    <ProjectsDiv id='3'>
      <div>
        <ProjectTitle>PROJECTS</ProjectTitle>
        <ContentDiv>
          <Flip
            title='LocknLock'
            detail='LocknLock 웹페이지 클론코딩입니다.'
            tech={['Javascript', 'html', 'css']}
            work={[
              'HTML마크업',
              'Javascript 기능구현',
              'css스타일링',
              'git-pages',
            ]}
            code='https://github.com/rlatjsghd123/webProject03'
            site='https://rlatjsghd123.github.io/webProject03'
            image='locknlock.png'
          />
          <Flip
            title='Netflix'
            detail='Netflix 웹페이지 클론코딩입니다.'
            tech={['react', 'scss', 'axios', 'router', 'firebase', 'git-pages']}
            work={[
              'firebase를 활용한 로그인 및 회원가입 기능구현',
              '검색기능 구현',
              'git-pages배포',
            ]}
            code='https://github.com/rlatjsghd123/netflix_app'
            site='https://rlatjsghd123.github.io/netflix_app'
            image='nexflix.png'
          />
          <Flip
            title='LoL_info'
            detail='lol rest api를 활용한 롤 전적검색사이트 입니다.'
            tech={[
              'react',
              'redux',
              'scss',
              'axios',
              'router',
              'firebase',
              'git-pages',
              'Typescript',
            ]}
            work={[
              'LOL API를 활용한 챔피언정보 소환사정보 전적 랭킹 구현',
              'firebase를 활용한 게시판 추가 삭제 댓글 추천 기능 구현',
              'firebase를 활용한 로그인 및 회원가입 기능 구현',
              '검색기능구현',
              'git-pages배포',
            ]}
            code='https://github.com/rlatjsghd123/lol_info'
            site='https://rlatjsghd123.github.io/lol_info'
            image='lolinfo.png'
          />
          <Flip
            title='Bus_info'
            detail='공공데이터포탈사이트 rest api를 활용한 서울버스정보사이트 입니다.'
            tech={['react', 'redux', 'Typescript', 'scss', 'axios', 'aws']}
            work={[
              '공공데이터API을 활용한 버스 및 정류장 검색기능',
              '정류장 지도위치 지원',
              '버스도착정보',
              'AWS배포',
            ]}
            code='https://github.com/rlatjsghd123/businfo'
            site='http://businfo.duckdns.org'
            image='bus.png'
          />
          <Flip
            title='Portfolio'
            detail='개인 포트폴리오 사이트입니다.'
            tech={['react', 'Typescript', 'styled-components', 'git-pages']}
            work={['styled-components활용 ,git-pages배포']}
            code=''
            site=''
            image='port.png'
          />
        </ContentDiv>
      </div>
    </ProjectsDiv>
  );
};

export default Projects;