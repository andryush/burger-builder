import React from 'react';
import './DrawerToggle.css';

const DrawerToggle = ({toggle}) => {
    return(
        <div className='DrawerToggle' onClick={toggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default DrawerToggle;