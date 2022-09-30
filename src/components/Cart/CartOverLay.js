import React, { Component } from 'react';
import Model from '../Ui/Model';
import classes from './CartOverLay.module.css';
export default class CartOverLay extends Component {
    render() {
        return (
            <Model>
                {' '}
                <div className={classes['overlay-container']}>CartOverLay</div>
            </Model>
        );
    }
}
