import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import '../Modal.scss'

class UserLoginErrorModal extends React.Component{
render(){
  console.log('render')
  return (
    <div className='modalContainer'>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={'modal'}
        open={this.props.error}
        onClose={this.props.toggleError}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={this.props.error}>
          <div className={'modalWindow SimpleModal'}>
            <h2 id="transition-modal-title">Пользователь не найден</h2>
                <IconButton
                aria-label="Закрыть окно"
                className={'modalWindowClose'}
                onClick={this.props.toggleError}
                >
                    <CloseIcon/>
                </IconButton>
                <p className={'SimpleModalText'}>
                Проверьте поля
                </p>
            <Button className={'modalBtn'} 
    onClick={
    this.props.toggleError
    }
    >
      ОК
    </Button>            
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
  
}

const mapStateToProps=(state)=>{
  return {
      error: state.error
  }
};
const putActionsToProps=(dispatch)=>{
  return {
    toggleError: bindActionCreators(toggleError, dispatch)
  }
}
export const WrapedUserError = connect(mapStateToProps, putActionsToProps)(UserLoginErrorModal)

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {toggleError} from '../../../../../weleda/weleda-react/dist/store/actions'