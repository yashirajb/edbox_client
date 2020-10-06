import React, {Component} from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class NewBox extends Component {
    constructor(){
        super();
        this.state = {
            grade:"",
            reading_level: "",
            description: "",
            contents:""

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createBox(this.state)
    }
 
render(){
// const NewBox = (props) => {
  return (
    <div className="newboxForm">
    <Form onSubmit={this.handleSubmit}>
      <FormGroup row>
        <Label for="Grade" sm={2}>Grade</Label>
        <Col sm={10}>
          <Input type="text" name="grade" id="grade" placeholder="e.g. 1st Grade" onChange={this.handleChange}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="Reading_level" sm={2}>Reading Level</Label>
        <Col sm={10}>
          <Input type="text" name="reading_level" id="readingLevel" placeholder="e.g. 1-3" onChange={this.handleChange}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="Description" sm={2}>Description</Label>
        <Col sm={10}>
          <Input type="textarea" name="description" id="description" onChange={this.handleChange} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="Contents" sm={2}>Contents</Label>
        <Col sm={10}>
          <Input type="textarea" name="contents" id="contents" onChange={this.handleChange}/>
        </Col>
      </FormGroup>
      <div className="submitSuggestion">
        <div className="newboxSubmit">
      <Button color="secondary" input type="submit" value="Create">Create Your Box</Button>
       </div>
       </div>
      </Form>
      </div>
        );
    }
}
export default NewBox;
