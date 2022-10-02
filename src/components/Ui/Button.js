import React, { Component } from 'react';

import classes from './Button.module.css';
export default class c extends Component {
    render() {
        const { value, onButtonClick, disabled } = this.props;
        const btnStyled =
            value === 'VIEW BAG' ? classes['btn-bag'] : classes['btn-normal'];
        return (
            <button
                className={`${classes['btn']} ${btnStyled}`}
                onClick={(e) => onButtonClick(e.target.value)}
                value={value}
                disabled={disabled}
            >
                {value}
            </button>
        );
    }
}
