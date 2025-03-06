import { Nav, NavList, NavItem } from "./styled";
import { Button } from "../../types";
import { NavbarList } from "../../api";
import {Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Nav>
      <Typography variant="h4" color='#959595'>Portfolio</Typography>
      {NavbarList.map((item, index) => {
        return (
          <NavList key={index}>
            <NavItem active={item.active}>
              <Typography>{item.title}</Typography>
            </NavItem>
          </NavList>
        );
      })}
      <Button>
        <Typography>Hire Me</Typography>
      </Button>
    </Nav>
  );
};

export default Navbar;
