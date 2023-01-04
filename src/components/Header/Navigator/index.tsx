import styled from 'styled-components';
import { AvatarXsmall, Dropdown1 } from '../../../assets';
import { device } from '../../../styles/theme';

const isLoggedIn = false;
const userName = '드림하우스';

const Navigator = () => {
  return (
    <Wrapper>
      <div>게시판</div>
      <div>마이페이지</div>
      {isLoggedIn ? (
        <>
          <UserInfoWrapper>
            <AvatarXsmall />
            <div>{userName}</div>
            <Dropdown1 />
          </UserInfoWrapper>
        </>
      ) : (
        <div>로그인</div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: LINESeedKR-Rg;
  font-size: ${(props) => props.theme.font.medium};

  & > *:hover {
    cursor: pointer;
  }

  & > div {
    margin-left: 1.5rem;
  }

  ${device.tablet} {
    margin-top: 0.5rem;
  }

  ${device.mobile} {
    display: none;
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: LINESeedKR-Bd;
  font-size: ${(props) => props.theme.font.small};

  & > * {
    margin-left: 0.5rem;
  }
`;

export default Navigator;
