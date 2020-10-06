import React from 'react';
import { UncontrolledAlert } from 'reactstrap';
import AboutEdBoxModal from '../AboutEdBoxModal/AboutEdBoxModal';



function AboutAlert() {
    return (
      <UncontrolledAlert color="info">
       New to EdBox? Click below to learn more <div className="edmodal"></div>
       <br></br>
       <AboutEdBoxModal />
      </UncontrolledAlert>
    );
  }
  
  export default AboutAlert;