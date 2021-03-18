import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import { Image } from "semantic-ui-react";
import { history } from "../..";
import { RootStore } from "../stateManagment/store/store";
import logo from "../utilities/fontsAndImage/logo.jpg"
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const user = useSelector((state: RootStore) => state.getUserReducer.userData);
  return (
    <div>
      <div className="navbar-div">
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/"><Image size="tiny" src={logo} alt="logo" rounded/></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Nowa umowa
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/nowaSprzedaż">Sprzedaż</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href="/noweWypożyczenie">Wypożyczenie</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href="/nowaWyprzedaż">Wyprzedaż</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                   Suknie
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/suknie-salonowe">Suknie salonowe</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href="/suknie-sprzedażowe">Suknie sprzedażowe</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/klientki">Klientki</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                   Umowy
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/zamówienia/sprzedaż">Umowa Sprzedaży</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href="/zamówienia/wypożyczenie">Umowa Wypożyczenie</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href="/zamówienia/wyprzedaż">Umowa Wyprzedaży</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <Nav className="ml-auto" navbar>
                {user ?
              <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Witaj {user?.username}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem onClick={()=>{localStorage.removeItem("jwt"); history.push('/')} }>Wyloguj się</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> :
                <NavItem>
                <NavLink href="/">Zaloguj sie</NavLink>
              </NavItem>}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
