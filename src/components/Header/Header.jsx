import "./Header.css";
import { StyledHead } from "./Header.styles";

const Header = () => {

  return (
    <>
      <StyledHead>
        <a>로그인</a>
        <a>로그아웃</a>
        <a>회원가입</a>
        <a>메뉴</a>
      </StyledHead>
    </>
  )
}

export default Header;