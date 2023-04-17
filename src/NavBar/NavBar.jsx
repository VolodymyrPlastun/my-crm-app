import { Navbar,  Collapse } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar fixed="top" expand="lg" dark bg="dark" mb="3">
        <Link to="/">Home</Link>
        <Navbar.Toggler target="#navbarColor1" />
        <Collapse navbar id="navbarColor1">
          <Navbar.Nav mr="auto">
          <Link to="/users" >Users list</Link>
            <Link to="/add-role" >Add role</Link>
      
            <Link to="/edit-users">Edit users</Link>
            <Link to="/create-trip">Create trip</Link>
          </Navbar.Nav>
        </Collapse>
      </Navbar> 
    )
};

export default NavBar;