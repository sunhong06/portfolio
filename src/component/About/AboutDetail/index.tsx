import React from 'react';
import styled from 'styled-components';

const DetailDiv = styled.div`
  margin-bottom: 150px;
`;
const Intro = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #888;
  line-height: 2;
  letter-spacing: -0.2px;
`;

const AboutDetail: React.FC = () => {
  return (
    <DetailDiv>
      <Intro>
        저는 친구의 추천으로 개발자를 시작하였고, 국비교육을 들으며 기초를
        탄탄하게 다진 후 개인적으로 독학을 하고있습니다.
      </Intro>
      <Intro>
        국비교육을 통해 HTML, CSS 및 JavaScript를 사용하여 기본적인 웹 페이지를
        만들 수 있고, React와 같은 프레임워크를 학습하여 컴포넌트 기반의 개발
        방식을 이해하고 있습니다.
      </Intro>
      <Intro>
        또한 개인적인 프로젝트 제작 할때 코드의 안정성과 버그를 사전에 방지 할
        수 있는 타입스크립트를 공부하여 적용하였고,
      </Intro>
      <Intro>
        복잡한 상태관리로 리덕스를 공부하여 적용했습니다. 이를 통해 컴포넌트
        간의 데이터 흐름을 좀 더 체계적으로 관리하고 유지보수를 수월하게 할 수
        있었습니다.
      </Intro>
      <Intro>
        아직 신입이기에 공부해야할것도 많고 많이 부족하지만 항상 노력하고
        새로운것을 알아가는 개발자가 되겠습니다.
      </Intro>
    </DetailDiv>
  );
};

export default AboutDetail;
