import styled from 'styled-components';
import Logo from './Logo';
import Navigator from './Navigator';
import SearchBar from './SearchBar';
import { device } from '../../styles/theme';
import { Hamburger } from '../../assets';

const Header = () => {
  return (
    <Wrapper>
      <LeftSectionWrapper>
        <LogoWrapper>
          <Logo />
          <div>
            <Hamburger width="24" height="24" />
          </div>
        </LogoWrapper>
        <SearchBar />
      </LeftSectionWrapper>
      <Navigator />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 1.25rem 8rem;
  background-color: ${(props) => props.theme.color.white};

  img {
    width: 80px;
  }

  ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${device.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
    img {
      width: 70px;
    }
  }
`;

const LogoWrapper = styled.div`
  & > div:last-child {
    display: none;

    ${device.mobile} {
      display: flex;
    }
  }

  ${device.mobile} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 0 3rem;
  }
`;

const LeftSectionWrapper = styled.div`
  display: flex;
  width: 600px;
  align-items: center;

  ${device.mobile} {
    display: flex;
    flex-direction: column;
    justify-contnet: center;
    width: 100vw;
  }
`;

export default Header;
