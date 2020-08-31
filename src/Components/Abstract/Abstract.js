import React, {Component} from 'react';
// import {gandhi, leaf, run} from '../../Assets/images';
import Gallery from 'react-grid-gallery';
import axios from 'axios';
import './Abstract.css'


class Abstract extends Component {

    state = {
        image_array : []
    }


    componentDidMount () {
       
        this.loadData();
    }

    loadData () {
        axios.get('http://localhost:8000/api/abstract/')
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
           pointerEvents: 'none'
      
           
           
        });
     }

     myTileViewportStyleFn() {
        if (this.props.item.isSelected)
          return {
                 // something stylish...
                 
                 
                  };
      }


    render() {
        console.log(this.state.image_array);
     
        return (
            <div className="abstract" onContextMenu={(e)=> e.preventDefault()}>
               
                 <div className="galleryContainer abstract">
                 <Gallery images={this.state.image_array} 
                          enableImageSelection={false} 
                          backdropClosesModal={true} 
                          margin={40}
                          rowHeight={220}
                          showLightboxThumbnails={true}
                          thumbnailStyle={this.styleSmall}
                        />                       
                 </div>
              

                 
            </div>
        );
    }
}

export default Abstract;