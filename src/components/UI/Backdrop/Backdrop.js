import React from 'react';
import './Backdrop.css';

const Backdrop = ({show, hideBackdrop}) => {
   return show ? <div className="Backdrop" onClick={hideBackdrop}></div> : null;
}

export default Backdrop;