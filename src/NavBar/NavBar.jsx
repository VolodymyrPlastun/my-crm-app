import { Navbar,  Collapse } from 'bootstrap-4-react';
import { NavLink } from './NavBar.styled';

const NavBar = () => {
    return (
        <Navbar fixed="top" expand="lg" dark bg="dark" mb="3">
        <NavLink to="/">Home</NavLink>
        <Navbar.Toggler target="#navbarColor1" />
        <Collapse navbar id="navbarColor1">
          <Navbar.Nav mr="auto">
          <NavLink to="/users" >Users list</NavLink>
            <NavLink to="/add-role" >Add role</NavLink>
      
            <NavLink to="/edit-users">Edit users</NavLink>
            <NavLink to="/create-trip">Create trip</NavLink>
          </Navbar.Nav>
        </Collapse>
      </Navbar> 
    )
};

export default NavBar;