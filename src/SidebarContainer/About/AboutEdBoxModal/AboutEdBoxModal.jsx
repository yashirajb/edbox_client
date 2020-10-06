import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AboutEdBoxModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

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
      <Button color="secondary" onClick={toggle}>Click Here</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>What's an EdBox?</ModalHeader>
        <ModalBody>
        EdBoxes are boxes created for teachers to better meet the varying learning needs of students in their classroom. One struggle teachers consistently have is differentiating instruction that effectively responds to their learner’s unique academic needs. EdBoxes are an answer to this as they are carefully curated boxes that contain learning materials to support the learning needs of students at a below basic, proficient, or advanced academic level in grades K-6. With EdBoxes, below basic students have an opportunity to catch up, proficient students can continue to build solid grade-level skills, and advanced students can continue to engage in learning that is rigorous and engaging.          
        <br></br>
        <br></br>
          <Button color="success" onClick={toggleNested}>What information do I need?</Button>
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>What information do I need to consider?</ModalHeader>
            <ModalBody>To best select an EdBox you'll need your reader's lexile score, their current grade level, and knowledge of their interests.</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
              <Button color="secondary" onClick={toggleAll}>All Done</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Done</Button>{' '}
          {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AboutEdBoxModal;