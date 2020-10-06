import React from 'react';
import EdBoxCard from './EdBoxCard/EdBoxCard';
import {Container, Row, Col} from 'reactstrap';
// import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';


function MainContainer(props){
//  //uses map function to create an array of returned items
//     const boxes = props.boxes.map(function(box){
//         return(
//            <Col sm="4">
//             <EdBoxCard box={box}/>
//             </Col>
//         )
//     })
//     return(
//         <Container fluid>
//             <Row>  
//             {boxes}
//             </Row>
//         </Container>
//     )
// }

const edboxes = props.boxes.map(function(box){
    return(
       <Col sm="4">
        <EdBoxCard box={box} updateBox={props.updateBox} deleteBox={props.deleteBox} />
        </Col>
    )
})
return(
    <Container fluid>
        <Row>  
        {edboxes}
        </Row>
    </Container>
)
}

export default MainContainer;