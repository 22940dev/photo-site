import React, {Component} from 'react';
import {silhoutte} from '../../Assets/images';
import './Contact.css';
import axios from 'axios';


class Contact extends Component {

    constructor() {
        super();
        this.state = {
           
                name: '',
                email:'',
                message:''
            
        }
    }


    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({...this.state,[name]: value});
        
    }

    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.postData();
    }

    postData = () => {
        axios.post('http://localhost:8000/api/message/', {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        })
        .then((response) => {
            console.log(response)
        })
    }

    render () {
        return (
            <div className="contact-page">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                           <img src={silhoutte} alt="haripal-shadow" className="silh"></img>
                        </div>
                        <div className="col-lg-6">
                            <form class="contact-form" onSubmit={this.submitForm}>

                                <div className="form-group w-50">
                                    <label for="name">NAME</label>
                                    <input onChange={this.changeHandler} name="name" type="text" class="form-control"></input>
                                </div>

                                <div className="form-group w-50">
                                    <label for="exampleInputEmail1">EMAIL ADDRESS</label>
                                    <input onChange={this.changeHandler} name="email" type="email" class="form-control"></input>     
                                </div>
                                
                                <div className="form-group w-50">
                                    <label for="message">MESSAGE</label>
                                    <textarea onChange={this.changeHandler} name="message" type="text" class="form-control"></textarea>
                                </div>

                                <button type="submit"  class="btn btn-primary w-40">Submit</button>
                                <br></br>
                                <div>
                                    <br></br>
                                <a className="email-link" href = "mailto: haripalbaluja.208@gmail.com">MAIL ME HERE</a>
                                </div>
                            </form>
                                {/*      */}
                                {/* <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                               
                                <a className="a2a_button_facebook share-icons"></a>
                                <a className="a2a_button_twitter share-icons"></a>
                                <a className="a2a_button_email share-icons"></a>
                                </div> */}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;