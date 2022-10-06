import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cart from '../components/Cart/Cart';
import classes from './CartPage.module.css';
import Button from '../components/Ui/Button';

class CartPage extends Component {
    render() {
        const { cart, selecetdSymbol } = this.props;
        const itemsLength = cart.items.length === 0 ? false : true;
        return (
            <section className={classes.cartPage}>
                {itemsLength && <h2 className={classes.header}>Cart</h2>}
                <Cart />
                {itemsLength && (
                    <div className={classes.order}>
                        <p>
                            Tax 21% :{' '}
                            <small>
                                {selecetdSymbol} {cart.totalAmount * 0.21}
                            </small>
                        </p>
                        <p>
                            Quantity : <small>{cart.totalQuantity}</small>
                        </p>
                        <p>
                            Total :{' '}
                            <small>
                                {selecetdSymbol} {cart.totalAmount}
                            </small>
                        </p>
                        <div className={classes['order-btn']}>
                            <Button value='ORDER' />
                        </div>
                    </div>
                )}
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    selecetdSymbol: state.currency.selectedSymbol,
});
export default connect(mapStateToProps)(CartPage);
