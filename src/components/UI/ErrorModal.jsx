import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ModalError = props => {
  return (
    <div>
      <div className={classes.Backdrop} />
      <Card className={classes.Modal}>
        <header className={classes.Header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.Content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.Actions}>
          <Button>Okay</Button>        
        </footer>
      </Card>
    </div>
  )
}

export default ModalError;
