import React, {Component} from 'react';
// import {gandhi, leaf, run} from '../../Assets/images';
import Gallery from 'react-grid-gallery';
import axios from 'axios';
import './Scenic.css'

class Scenic extends Component {

    state = {
        image_array : []
    }

    componentDidMount () {
       
        this.loadData();
    }

    loadData () {
        axios.get('http://localhost:8000/api/scenic/')
        .then( response => {
            this.setState({image_array : response.data})
        
        })
        .catch(error => {
            console.log(error);
            console.log('some error')
        })


    }

    styleSmall(){
        return ({
           
           width: '100%',
           backgroundColor: 'none',
      
           
           
        });
     }


    render() {
        return (
            <div className="scenic">
               
            <div className="galleryContainer">
            <Gallery images={this.state.image_array} 
                     enableImageSelection={false} 
                     backdropClosesModal={true} 
                     margin={10}
                     rowHeight={220}
                     showLightboxThumbnails={true}
                     thumbnailStyle={this.styleSmall}/>
            </div>
         

            
       </div>
        );
    }
}

export default Scenic;