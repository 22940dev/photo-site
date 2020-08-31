import React, {Component} from 'react';
import './About.css'
import {haripal} from '../../Assets/images';

class About extends Component {

    render () {
        return (
            <div className="about-page">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6 myimage">
                            <img src={haripal} className="coverimage" alt="haripal"></img>
                        </div>
                        <div class="col-lg-6 intro">
                            <h4 id="about">About</h4>
                            <div className="introduction">
                                
                                <p>Haripal Baluja</p>
                                
                                
                                <br></br>
                                
                                <p>I've done Bachelors of Engineering in Information Technology, throughout the college I developed many hobbies unknowingly,
                                    some of them being watching and playing football and as time passed I didn't realize when I became so fond of photography,
                                </p>
                                <p>
                                As of now I don't have a concrete theme too to cover, just going about what I really like and I always wanted a place to portray my clicks 
                                on an independent platform other than instagram so I made this site here :)
                                </p>

                                <p>
                                I hope you enjoy my work! if you have any questions or want to collaborate on a project, please don't hesitate to contact me. 
                                </p>
                                <p>Have a nice day!</p>
                               
                                    <a target="_blank" href="https://www.instagram.com/haripalbaluja" class="fa fa-instagram fa-2x social-icons"></a>
                                    <a target="_blank" href="https://www.twitter.com/90minutelife" class="fa fa-twitter fa-2x"></a>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;