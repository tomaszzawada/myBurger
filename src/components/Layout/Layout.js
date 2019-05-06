import React, {Component, Fragment } from 'react';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideMenu from '../Navigation/SideMenu/SideMenu';

class Layout extends Component {
    state = {
        showSideMenu: false
    }

    sideMenuCloseHandler = () => {
        this.setState({showSideMenu: false});
    }

    sideMenuToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideMenu: !prevState.showSideMenu}
        });
    }

    render() {
        return (
            <Fragment>
                <Toolbar sideMenuClicked={this.sideMenuToggleHandler}/>
                <SideMenu open={this.state.showSideMenu} close={this.sideMenuCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

export default Layout;