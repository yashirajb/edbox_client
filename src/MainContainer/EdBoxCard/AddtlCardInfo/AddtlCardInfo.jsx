import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AddtlCardInfo = (props) => {
  const {
    buttonLabel,
    className
  } = "More Info";

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  return (
    <div>
      <Button color="info" onClick={toggle}>More Info</Button>
      {/* <Button color="success" onClick={this.toggle}>Edit Level {this.props.box.reading_level} Box</Button> */}

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>What's Inside?</ModalHeader>
        <ModalBody>
            Each EdBox consists of four carefully selected, high-interest books that precede each other in difficulty. Book selection is based on the typical Lexile range of a student reading at either below, at, or above their respective grade level.
            In addition to leveled texts, each EdBox includes four reading comprehension activities, with each activity corresponding to each book. These comprehension acitivities are important indicators of the student's ability to understand the text and should be used as an informal assessment. 
            Four formal comprehension assessments are also provided to ensure the student is comprehending each preceding book before moving to the next book in the collection. 
            <br></br>
            <br></br>
          <Button color="success" onClick={toggleNested}>What is a Lexile score?</Button>
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Lexile Scores</ModalHeader>
            <ModalBody>Each EdBox book has an associated Lexile score. A Lexile score is a measurement that gauges the difficulty level of a book and can be used to inform book selection. Students can be given a DRA assessment to determine their current Lexile score. If you are unable to attain your student's Lexile score, you may wish to select a box within the score range for an at grade level student in the chosen grade.</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
              <Button color="secondary" onClick={toggleAll}>All Done</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddtlCardInfo;