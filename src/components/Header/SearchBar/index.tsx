import styled from 'styled-components';
import { Search, Dropdown } from '../../../assets';

const estateType = ['아파트', '오피스텔', '연립/다세대', '단독/다가구'];
const placeholderType = '지역명, 지하철역, 단지명을 입력해주세요';

const SearchBar = () => {
  return (
    <Wrapper>
      <SearchFilterWrapper>
        <div>{estateType[0]}</div>
        <Dropdown />
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
  width: 480px;
  height: 60%;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.color.gray2};
  border-radius: 10px;
`;

const SearchFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;

  & > div {
    margin-right: 1.2rem;
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

  input::placeholder {
    font-size: ${(props) => props.theme.font.small};
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
