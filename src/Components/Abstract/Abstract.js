import React, {Component }  from 'react';
import {gandhi, leaf, run} from '../../Assets/images';
import Gallery from 'react-grid-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import axios from 'axios';
import './Abstract.css'


const images = [{ src: {gandhi} }, { src: {leaf} }];


class Abstract extends Component {

    state = {
        image_array : [],
        modalIsOpen: false
    }

    toggleModal = () => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
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
           
           display: 'block',
           width: '100%',
           height:'100%',
          
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
        const { modalIsOpen } = this.state.modalIsOpen;
     
        return (
            <div className="abstract" onContextMenu={(e)=> e.preventDefault()}>
               
                 <div className="galleryContainer abstract">
                 <Gallery images={this.state.image_array} 
                          enableImageSelection={false} 
                          backdropClosesModal={true} 
                          margin={10}
                          rowHeight={220}
                          showLightboxThumbnails={true}
                          thumbnailStyle={this.styleSmall}
                        />                       
                 </div>
              
{/*              
               <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={this.toggleModal}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway> */}

                 
            </div>
        );
    }
}

export default Abstract;