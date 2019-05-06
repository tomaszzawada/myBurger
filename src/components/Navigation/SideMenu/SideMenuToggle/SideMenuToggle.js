import React from 'react';
import classes from './SideMenuToggle.css'

const SideMenuToggle = (props) => (
    <div className={classes.SideMenuToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default SideMenuToggle;