import React from 'react';
import './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = ({show, hideBackdrop}) => {

    let myClasses = show ? 'SideDrawer Open' : 'SideDrawer Close';

    return(
        <Aux>
            <Backdrop show={show} hideBackdrop={hideBackdrop}/>
            <div className={myClasses}>
                <div className="Logo-m">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer;