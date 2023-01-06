import styled from 'styled-components';
import { House } from '@/assets';
import { device } from '@/styles/theme';

const Banner = () => {
  return (
    <Wrapper>
      <BannerContentWrapper>
        <p>원하는 매물을 찾고 있다면</p>
        <p>
          <span>Bestate</span> 에서 찾아보세요
        </p>
        <button>지도 보기</button>
      </BannerContentWrapper>
      <BannerImageWrapper>
        <img src={House} alt="house" />
      </BannerImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 8rem auto 0 auto;
  padding: 2rem 3rem;
  width: 80%;
  background: ${(props) => props.theme.color.primary3};
  line-height: 1.5;
  img {
    width: 180px;
  }
  border-radius: 1rem;

  button {
    font-size: ${(props) => props.theme.font.medium};
    margin-top: 1.5rem;
    padding: 0.5rem 1rem;
    color: ${(props) => props.theme.color.white};
    background: ${(props) => props.theme.color.primary1};
  }

  span {
    font-style: italic;
    color: ${(props) => props.theme.color.primary1};
  }

  ${device.mobile} {
    margin-top: 9rem;
    padding: 1rem;

    button {
      margin-top: 0.5rem;
      font-size: ${(props) => props.theme.font.small};
    }
  }
`;

const BannerContentWrapper = styled.div`
  padding: 1rem 2rem;
  margin-right: 1rem;

  & > p:first-child {
    font-size: ${(props) => props.theme.font.small};
    font-weight: normal;
  }

  & > p {
    font-weight: bold;
    font-family: nunito;
    font-size: ${(props) => props.theme.font.xlarge};
  }

  ${device.mobile} {
    padding: 0;
  }
`;

const BannerImageWrapper = styled.div`
  padding: 1rem 2rem;
  ${device.mobile} {
    display: none;
  }
`;

export default Banner;
