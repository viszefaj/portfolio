import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;
export const NavItem = styled.li<{ active?: boolean }>`
  margin-right: 1rem;
  color: ${(props) => (props.active ? "#FF8542" : "#fff")};
  font-weight: 700;
  font-family: "Times New Roman", Times, serif;
  cursor: pointer;
  transition: all 0.3s;

    &:hover {
        color:#FF8542 ;
    }
`;

export const NavButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #ff6500;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color:#FF8542 ;
  }
`;
