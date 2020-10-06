// import React from 'react';
// import Boxes from '../../Boxes/Boxes';
// import EditEdBox from './EditEdBox/EditEdBox';
// import Card from 'react-bootstrap/Card'
// import { Container, Row, Col } from 'reactstrap';

// function EdBoxList(props){
//     const boxes = props.boxes.map(function(box){
//     return(
//         // <div>
//         // <li key = {box._id}>
//         //     <h2>{box.grade}</h2>
//         //     <h2>{box.reading_level}</h2>
//         //     <h2>{box.description}</h2>
//         //     <h2>{box.contents}</h2>
//         //     <div className="editBox">
//         //     <EditEdBox box={box} updateBox={props.updateBox}/>
//         //     </div>
//         //     <div className="deleteBox">
//         //         <button onClick={()=>{props.deleteBox(box._id)}}>Delete {box.reading_level} Box</button>
//         //     </div>
//         // </li>
//         // </div>

// <div className="edBoxListBoxes">
// <Container>
// <Row>
// <Card style={{ width: '50rem' }}>
//   <Card.Img variant="top" src="https://i.imgur.com/ijj5oWF.jpg" />
//   <Card.Body>
//     <Card.Title>EdBox Profile</Card.Title>
//     <Card.Text>
//     <li key = {box._id}>
//             <h2>{box.grade}</h2>
//             <h2>{box.reading_level}</h2>
//             <h2>{box.description}</h2>
//             <h2>{box.contents}</h2>
//             <div className="editBox">
//             <EditEdBox box={box} updateBox={props.updateBox}/>
//             </div>
//             <div className="deleteBox">
//                 <button onClick={()=>{props.deleteBox(box._id)}}>Delete {box.grade} {box.reading_level} Box</button>
//             </div>
//     </li>
//     </Card.Text>
//     {/* <Button variant="primary">Go somewhere</Button> */}
//   </Card.Body>
// </Card>
// </Row>
// </Container>
// </div>

// // <div className="">
// // <li key = {box._id}>
// // <h2>{box.grade}</h2>
// // <h2>{box.reading_level}</h2>
// // <h2>{box.description}</h2>
// // <h2>{box.contents}</h2>
// // <div className="editBox">
// // <EditEdBox box={box} updateBox={props.updateBox}/>
// // </div>
// // <div className="deleteBox">
// //     <button onClick={()=>{props.deleteBox(box._id)}}>Delete {box.reading_level} Box</button>
// // </div>
// // </div>
// // </li>

    
 
// // {/* </div>
        
// // </li>  */}
         
//     )

// })
// return(
//     <div>{boxes}</div>
    
//     )
// }

// export default EdBoxList; 






// function EdBoxList(props){
//     const boxes = props.boxes.map(function(box){
//     return(
//         <div>
//         <li key = {box._id}>
//             <h2>{box.grade}</h2>
//             <h2>{box.reading_level}</h2>
//             <h2>{box.description}</h2>
//             <h2>{box.contents}</h2>
//             <div className="editBox">
//             <EditEdBox box={box} updateBox={props.updateBox}/>
//             </div>
//             <div className="deleteBox">
//                 <button onClick={()=>{props.deleteBox(box._id)}}>Delete {box.reading_level} Box</button>
//             </div>
//         </li>
//         </div>
         
//     )

// })
// return(
//     <div>{boxes}</div>
    
//     )
// }

// export default EdBoxList; 