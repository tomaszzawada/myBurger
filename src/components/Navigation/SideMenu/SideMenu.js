import React, {Fragment} from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './SideMenu.css';

const SideMenu = (props) => {
    let attachedClasses = [classes.SideMenu, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideMenu, classes.Open];
    }
    return (
        <Fragment>
            <div className={props.open ? classes.Backdrop : null} onClick={props.close}></div>
            <div className={attachedClasses.join(' ')}>
                <Logo height="10%" marginBottom="32px"/>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Fragment>
    );
};

export default SideMenu;