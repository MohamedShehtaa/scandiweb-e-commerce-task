import { Component } from 'react';
import ReactDOM from 'react-dom';

import classes from './Model.module.css';

export default class Model extends Component {
    render() {
        return ReactDOM.createPortal(
            <div className={classes.modal}> {this.props.children}</div>,
            document.getElementById('cart-overlay')
        );
    }
}
