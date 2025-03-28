import { StyledNav } from "./Nav.styles";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  const navi = useNavigate();



  return (
    <StyledNav>
      <a href="/chapter01">홈</a>
      <a onClick={() => navi("/chapter03")}>서비스</a>
      <a href="#contact">문의</a>
      <a href="#about">소개</a>
      <a onClick={() => navi("/foods")}>부산맛집</a>
    </StyledNav>
  );
};

export default NavBar;
