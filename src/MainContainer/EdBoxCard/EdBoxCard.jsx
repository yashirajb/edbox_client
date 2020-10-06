import React, {Component} from 'react'; 
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import EditEdBox from '../../EdBoxContainer/EdBoxList/EditEdBox/EditEdBox';
import AddtlCardInfo from './AddtlCardInfo/AddtlCardInfo';




class EdBoxCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        grade: this.props.box.grade,
        reading_level: this.props.box.reading_level,
        description: this.props.box.description,
        contents: this.props.box.contents
       
      };
    }
  
    render() {
      console.log("props being passed")
      return (
        <div>
        <Card>
        <CardImg top width="100%" src="https://i.imgur.com/ijj5oWF.jpg" alt="Books" />
        <CardBody>
        <div className="cardGrade">
        <CardTitle>{this.props.box.grade}</CardTitle>
        </div>
        <div className="cardReadingLevel">
        <CardSubtitle>Level {this.props.box.reading_level}</CardSubtitle>
        </div>
        <br></br>
        <div className="cardDescription">
        <CardText>{this.props.box.description}</CardText>
        </div>
        <br></br>
        <div className="cardContents">
        <CardText>{this.props.box.contents}</CardText>
        </div>
        <br></br>
        <AddtlCardInfo />
        <br></br>
        <div className="editBox">
          {/* HERE IM PASSING IN EDITEDBOX BECAUSE IT CONTAINS THE FUNCTIONALITY FOR THE EDIT BUTTON */}
            {/* <EditEdBox box={this.props.box} updateBox={this.props.updateBox}/> */}
            {/* this.props.box allows the form to be prepopulated and then user can edit and update, this.props.box.id provides user with an empty form to update */}
         <EditEdBox box={this.props.box} updateBox={this.props.updateBox}/>
            {/* <EditEdBox boxes={this.state.box} updateBox={this.props.updateBox} /> */}
        </div>
        <br></br>
        <div className="deleteBox">
        {/* <Button color="info" onClick={toggle}>More Info</Button> */}
        {/* <Button color="warning" onClick={()=>{this.props.deleteBox(this.props.box.id)}}>Delete {this.props.box.reading_level} Box</Button> */}
        <Button color="warning" onClick={()=>{this.props.deleteBox(this.props.box.id)}}>Delete {this.props.box.reading_level} Box</Button>
        {/* <Button color="warning" onClick={()=>{this.state.deleteBox(this.props.box.id)}}>Delete {this.props.box.reading_level} Box</Button> */}

        </div>
        <br></br>
        <div>
        <Button color="link">Add to Favorites</Button>
        </div>

        </CardBody>
      </Card>
    </div>     
      );
    }
  }
  
  export default EdBoxCard;