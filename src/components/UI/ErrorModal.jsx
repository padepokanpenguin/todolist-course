import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = props => {
  return <div className={classes.Backdrop} onClick={props.errorHandler} />
}

const Modal = props => {
  return <Card className={classes.Modal}>
    <header className={classes.Header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.Content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.Actions}>
      <Button onClick={props.errorHandler}>Okay</Button>
    </footer>
    </Card>
}

const ModalError = props => {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop errorHandler={props.errorHandler}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<Modal title={props.title} message={props.message} errorHandler={props.errorHandler} />, document.getElementById('modal-root'))}
    </React.Fragment>
  )
}

export default ModalError;
