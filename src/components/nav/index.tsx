import { Nav, NavList, NavItem, NavButton } from "./styled";
import { NavbarList } from "../../api";
import {Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Nav>
      <Typography variant="h4">Portfolio</Typography>
      {NavbarList.map((item, index) => {
        return (
          <NavList key={index}>
            <NavItem active={item.active}>
              <Typography>{item.title}</Typography>
            </NavItem>
          </NavList>
        );
      })}
      <NavButton>
        <Typography>Hire Me</Typography>
      </NavButton>
    </Nav>
  );
};

export default Navbar;
