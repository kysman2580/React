import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100vw;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  background-color: #0056b3;

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`;
