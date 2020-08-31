import React, {Component} from 'react';
import './Categories.css';
import {gandhi, leaf, run} from '../../Assets/images';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {instagram} from '../../Assets/images';
import StickyFooter from 'react-sticky-footer';

class Categories extends Component {



    render () {
        return (
            <div className="categories-container">
                <div className="container-fluid">
                    <div class="row">
                        <div className="col-lg-4 parent">
                            <img src={leaf} alt="abstract" className="image"></img>
                                <Link to="abstract" style={{ textDecoration: 'none' }} className="link">
                                    <div className="centered">                  
                                        <span>abstract</span>
                                    </div>
                                </Link>
                        </div>
                        <div className="col-lg-4 parent">
                            <img src={gandhi} alt="abstract" className="image"></img>
                                <Link to="scenic" style={{ textDecoration: 'none' }} className="link">
                                    <div className="centered">                 
                                        <span>scenic</span>
                                    </div>
                                </Link>
                        </div>
                        <div className="col-lg-4 parent">
                            <img src={run} alt="abstract" className="image"></img>
                                <Link to="street" style={{ textDecoration: 'none' }} className="link">
                                    <div className="centered">                               
                                        <span>street</span>               
                                    </div>
                                </Link>
                        </div>
                    </div>
                </div>
                {/* <div className="instagram">
                    <a target="_blank" href="https://www.instagram.com/haripalbaluja">
                     <img src={instagram} className="ig-icon" alt="instagram"></img>
                     </a>
           
              </div> */}
                
                {/* <div className="footer">
                <StickyFooter
                    bottomThreshold={0}
                    normalStyles={{
                    backgroundColor: "#999999",
                    padding: "2rem",
                
                    }}
                    stickyStyles={{
                    backgroundColor: "rgba(255,255,255,.8)",
                    padding: "2rem"
                    }}
                >
                
                </StickyFooter>
                </div> */}

            </div>
          
        );
    }
}

export default Categories;