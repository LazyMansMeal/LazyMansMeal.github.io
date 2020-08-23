import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import { Modal, Button } from './atoms';
const MODAL_ID = 'addRecipe';

class AddRecipeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {}
    }
  }

  render() {
    return (
      <Modal show={this.props.show}>
        Add a recipe 
        <Button onClick={() => this.props.toggle()}>Close Modal</Button>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.modals[MODAL_ID].show
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch(toggleModal(MODAL_ID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeModal);