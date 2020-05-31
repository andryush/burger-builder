import React, { Component } from 'react';
import './Layout.css';

import Aux from '../Aux/Aux';
import Toolbar from '../../Navigation/Toolbar';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState(({showSideDrawer}) => {
            return {
                showSideDrawer: !showSideDrawer
            }
        })
    }


    render() {
        return(
            <Aux>
                <Toolbar show={this.sideDrawerCloseHandler}/>
                <SideDrawer 
                    show={this.state.showSideDrawer}
                    hideBackdrop={this.sideDrawerCloseHandler}
                />
                <main className="Content">{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout;