
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import AboutEdBoxModal from './AboutEdBoxModal/AboutEdBoxModal';
import AboutAlert from './AboutAlert/AboutAlert';


const About = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome, reader</h1>
          <p className="lead">Please browse our site and select a box. </p>
        </Container>

        <Container fluid>
            <AboutAlert />
        </Container>
        
      </Jumbotron>
    </div>

  );
};

export default About;








// import React, {Component} from 'react';

// function About(){
//     return(
//         <div>
//             <h3>This is the About Component, you can find out all about Edboxes, the mission, the vision, and what schools we are currently helping!</h3>
//         </div>
//     )
// }

// export default About; 