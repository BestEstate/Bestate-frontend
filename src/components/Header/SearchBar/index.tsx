import styled from 'styled-components';
import { Search, Dropdown2, Apartment } from '../../../assets';
import { device } from '../../../styles/theme';

const estateType = ['아파트', '오피스텔', '연립/다세대', '단독/다가구'];
const placeholderType = '지역명, 지하철역, 단지명을 입력해주세요';

const SearchBar = () => {
  return (
    <Wrapper>
      <SearchFilterWrapper>
        <div>{estateType[3]}</div>
        <Dropdown2 />
      </SearchFilterWrapper>
      <SearchInputWrapper>
        <input type="text" placeholder={placeholderType} />
      </SearchInputWrapper>
      <SearchIconWrapper>
        <Search />
      </SearchIconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  align-items: center;
  padding: 0.5rem;
  margin-left: 1.5rem;
  border: 1px solid ${(props) => props.theme.color.gray2};
  border-radius: 10px;

  ${device.mobile} {
    margin: 1rem 0.5rem 0 0.5rem;
    width: 90%;
  }
`;

const SearchFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  height: 100%;

  & > div {
    // margin-right: 1rem;
  }
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 100%;
  padding: 0 1rem;
  border-left: 1px solid ${(props) => props.theme.color.gray2};
  input {
    width: 100%;
  }

  ${device.mobile} {
    input::placeholder {
      font-size: ${(props) => props.theme.font.small};
    }
  }
`;

const SearchIconWrapper = styled.div`
  display: flex;
  Search {
    width: 100%;
    height: 100%;
  }
`;

export default SearchBar;
