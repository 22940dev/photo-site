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
                            <Link to="/photography"  style={{ textDecoration: 'none', color: 'black' }}> 
                            <p> HARIPAL BALUJA </p>
                            </Link>
                        </div>
                        
                        <div className="subheading">
                            <Link to="/photography"  style={{ textDecoration: 'none', color: 'black' }}>
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
                        <Link to='/photography/abstract' style={{ textDecoration: 'none', color: 'black' }}><h4 className="navlinks">ABSTRACT</h4></Link>
                        <Link to='/photography/scenic'   style={{ textDecoration: 'none', color: 'black' }}><h4 className="navlinks">SCENIC</h4></Link>
                        <Link to='/photography/street'   style={{ textDecoration: 'none', color: 'black' }}><h4 className="navlinks">STREET</h4></Link>
                        <Link to='/photography/contact'  style={{ textDecoration: 'none', color: 'black' }}><h4 className="navlinks">CONTACT</h4></Link>
                        <Link to='/photography/about'    style={{ textDecoration: 'none', color: 'black' }}><h4 className="navlinks">ABOUT</h4></Link>
                        
                       
                    </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default NavBar;