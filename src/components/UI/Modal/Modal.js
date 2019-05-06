import React, {Component, Fragment} from 'react';
import classes from './Modal.css';

class Modal extends Component { 

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
        
    }

    componentDidUpdate() {
        console.log('[Modal DidUpdate]');
    }

    render() {
    let displayModal = {
        transform: this.props.show ? 'translateY(0)' : 'translateY(-200vh)'
    }

        return (
            <Fragment>
                <div className={this.props.show ? classes.Backdrop : null} onClick={this.props.handleModal}>
                </div>
                <div className={classes.ModalWrapper} style={displayModal}>
                    <div className={classes.Modal} >
                        <span onClick={this.props.handleModal} className={classes.close}>&times;</span>
                        {this.props.children}
                    </div>
                </div>
            </Fragment>  
        )
    }
};

export default Modal;