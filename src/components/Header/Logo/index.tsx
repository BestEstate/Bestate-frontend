import styled from 'styled-components';
import LogoImage from '../../../assets/images/logo.png';

const Logo = () => {
  return (
    <Wrapper>
      <img src={LogoImage} alt="Logo" width={90} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-right: 2rem;
`;

export default Logo;
