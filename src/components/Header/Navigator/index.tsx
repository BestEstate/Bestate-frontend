import styled from 'styled-components';
import { AvatarXsmall, Dropdown } from '../../../assets';

const isLoggedIn = true;
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
            <Dropdown />
          </UserInfoWrapper>
          <div></div>
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
    padding-left: 10px;
    margin-left: 10px;
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: LINESeedKR-Bd;
  font-size: ${(props) => props.theme.font.small};

  & > * {
    margin-left: 5px;
  }
`;

export default Navigator;
