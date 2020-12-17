import React, { useState } from 'react';
import { DropdownItem,Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import {connect} from 'react-redux'




const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    fas
  } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);

  const changeBackdrop = e => {
    let value = e.target.value;
    if (value !== 'true') {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  }

  const changeKeyboard = e => {
    setKeyboard(e.currentTarget.checked);
  }

  return (
    <div>
        <span  className={`link-x theme-${props.theme}`} onClick={toggle}>
        <i className={fas}>
        <small >
        {buttonLabel}
        </small>
        </i>
        </span>
      <Modal isOpen={modal} toggle={toggle} className={className} backdrop={backdrop} keyboard={keyboard}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}




const mapStateToProps = state =>{
  return {
    ...state,
  }
}



export default connect(
  mapStateToProps,
  {}
  )(ModalExample);
