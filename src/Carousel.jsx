import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Cards from './Cards'
import FooterTwo from './FooterTow';
export default function Carousel() {
  return (<>
    <MDBCarousel showControls showIndicators  style={{position:"absolute",top:"180px"}} >
      <MDBCarouselItem
        className='w-100 d-block shadow-5 img-fluid hover-shadow rounded-4 '
        itemId={1}
        src='https://mdbootstrap.com/img/new/slides/041.jpg'
        
        alt='...'
      >
        <h5 className='w-100 d-block shadow-5 '>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <MDBIcon icon='carousel-control-next-icon' />
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block shadow-5 img-fluid hover-shadow rounded-4 '
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <MDBIcon icon='carousel-control-prev-icon' />

      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block shadow-5 img-fluid hover-shadow rounded-4 '
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
    <Cards  />

  </>
  );
  
  
}