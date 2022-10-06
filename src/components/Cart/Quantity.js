import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    increaseQuantity,
    removeItemFromCart,
} from '../../store/slicers/cartSlice';
import classes from './Quantity.module.css';

class Quantity extends Component {
    increaseQuantityHandler() {
        const { addItem, item } = this.props;
        addItem(item);
    }
    decreaseQuantityHandler() {
        const { removeItem, item } = this.props;
        removeItem(item);
    }
    render() {
        const { item } = this.props;
        return (
            <div className={classes['quantity-btn']}>
                <button onClick={this.increaseQuantityHandler.bind(this)}>
                    +
                </button>
                <p>{item.quantity}</p>
                <button onClick={this.decreaseQuantityHandler.bind(this)}>
                    {' '}
                    -{' '}
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(increaseQuantity(item)),
    removeItem: (id) => dispatch(removeItemFromCart(id)),
});

export default connect(null, mapDispatchToProps)(Quantity);
