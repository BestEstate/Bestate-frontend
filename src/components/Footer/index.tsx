import styled from 'styled-components';
import { device } from '../../styles/theme';

const Footer = () => {
  return (
    <Wrapper>
      <p>
        상호 : Bestate | 대표 : 김성현, 김혁진 | 사업자등록번호 : 000-00-00000 <br />
        주소 : Bestate Apartement Mansion Building <br />
        팩스번호 : Bestate000 <br />
        통신판매업신고번호 : 0000-0000-0000 <br />
        서비스 이용문의 : 0000-0000 | 이메일 : Bestate@bestate.com
        <br />
        ©Bestate Corp. All right Reserved
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.color.gray2};
  padding: 1rem 8rem;
  p {
    
    font-size: ${(props) => props.theme.font.xsmall}};
    line-height: 20px;
  }

  ${device.mobile} {
    padding: 1rem 2rem;
  }
`;

export default Footer;
