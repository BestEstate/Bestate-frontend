import styled from 'styled-components';
import Logo from './Logo';
import Navigator from './Navigator';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <Wrapper>
      <LeftSectionWrapper>
        <Logo />
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
`;

const LeftSectionWrapper = styled.div`
  display: flex;
  width: 600px;
  align-items: center;
`;

export default Header;
