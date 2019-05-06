import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import SideMenuToggle from '../SideMenu/SideMenuToggle/SideMenuToggle';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <SideMenuToggle clicked={props.sideMenuClicked}/>
        <Logo height="80%"/>
        <nav>
           <NavItems />
        </nav>
    </header>
);



export default Toolbar;