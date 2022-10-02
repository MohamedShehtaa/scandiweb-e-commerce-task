import React, { Component } from 'react';

import classes from './AttributeBtn.module.css';

export class AttirbuteBtn extends Component {
    attributeClickHandler(event) {
        const { onClickAttribute } = this.props;
        onClickAttribute(event.target.value);
    }
    render() {
        const { value, choosen, type } = this.props;
        const attributeStyle =
            type === 'swatch' ? classes['color'] : classes['size'];
        return (
            <button
                className={`${attributeStyle} ${
                    choosen === value ? classes['active'] : ''
                }`}
                onClick={this.attributeClickHandler.bind(this)}
                value={value}
                style={{ backgroundColor: `${type === 'swatch' ? value : ''}` }}
            >
                {type === 'swatch' ? '' : value}
            </button>
        );
    }
}

export default AttirbuteBtn;
