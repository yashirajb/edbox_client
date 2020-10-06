import React, {Component} from 'react';
// import Boxes from '../../../Boxes/Boxes';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class EditEdBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal:false,
            grade: props.box.grade,
            contents: props.box.contents
        };

        this.toggle = this.toggle.bind(this);
    }
        toggle(){
            this.setState(prevState => ({
                modal: !prevState.modal
            }));
        }

        handleChange = (e) => {
            console.log("receiving input")
            this.setState({
                [e.currentTarget.name] : e.currentTarget.value
            })
        }

        handleSubmit = async (e) => {
            e.preventDefault();
            console.log("Proceed with Update")
            console.log(this.props)
            const validUpdate = await this.props.updateBox(this.props.box.id, this.state)
            if(validUpdate){
                this.toggle();
            }
    
        }
        render(){
            return(
                <div>
                {/* This is the green button */}
                <Button color="success" onClick={this.toggle}>Edit Level {this.props.box.reading_level} Box</Button>
                {/* When clicked this opens modal */}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                {/* This is showing modal header title */}
                <ModalHeader toggle={this.toggle}>Change EdBox Contents: {this.props.box.title}</ModalHeader>
                <ModalBody>
                    {/* This is the actual modal form that will be changed on submit (grade and contents) */}
                 <form onSubmit={this.handleSubmit}>
                  Grade: <input type="text" name="grade" onChange={this.handleChange} value={this.state.grade} /> <br></br>
                  Contents: <input type="text" name="contents" onChange={this.handleChange} value={this.state.contents} />
                </form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={this.handleSubmit}>Update EdBox</Button>
                <Button color="secondary" onClick={this.toggle}>Update Complete</Button>
                </ModalFooter>
                </Modal>
                </div>
            )
        }
}

export default EditEdBox; 
