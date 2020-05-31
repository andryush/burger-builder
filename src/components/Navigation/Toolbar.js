import React from 'react';
import './Toolbar.css';

import NavigationItems from './NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = ({show}) => {
    return(
        <header className="Toolbar">
            <DrawerToggle toggle={show}/>
            <div className="Logo-d">
                <Logo />
            </div>
            <nav className="Desktop-only">
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar;