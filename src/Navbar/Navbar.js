import React, {Component} from 'react';
import './Navbar.css';
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class NavBar extends Component {


    render () {
        return (
            <div>      
                      
                   <div className="header">
                   
                        <div className="heading">
                            <Link to="/"  style={{ textDecoration: 'none', color: 'black' }}> 
                            <p> HARIPAL BALUJA </p>
                            </Link>
                        </div>
                        
                        <div className="subheading">
                            <Link to="/"  style={{ textDecoration: 'none', color: 'black' }}>
                            <p>PHOTOGRAPHY</p>
                            </Link>
                        </div>
                        
 

                        {/* <div className="navlinks">
                            <ul>
                            <li className="listitem">ABSTRACT</li>
                            <li className="listitem">SCENIC</li>
                            <li className="listitem">STREET</li>
                        </ul>  
                        </div> */}             
                     </div>
                     
                   
                     <Navbar collapseOnSelect expand="lg" className="bg" variant="light">
                        
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        {/* <Nav className="ml">
                        <Nav.Link  href="abstract"><h4 className="navlinks">ABSTRACT</h4></Nav.Link>
                        </Nav>    */}
                        <Nav className="ml-auto mr-auto">
                        <Link to="/abstract"  style={{ textDecoration: 'none', color: 'black' }}>    
                        <Nav.Link  href="#"><h4 className="navlinks">ABSTRACT</h4></Nav.Link>
                        </Link>
                        <Nav.Link  href="scenic"><h4 className="navlinks">SCENIC</h4></Nav.Link>
                        <Nav.Link  href="street"><h4 className="navlinks">STREET</h4></Nav.Link>
                        <Nav.Link  href="contact"><h4 className="navlinks">CONTACT</h4></Nav.Link>
                        <Nav.Link  href="about"><h4 className="navlinks">ABOUT</h4></Nav.Link>
                        
                       
                    </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default NavBar;