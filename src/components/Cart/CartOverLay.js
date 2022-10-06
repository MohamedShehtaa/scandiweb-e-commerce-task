import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Model from '../Ui/Model';
import Cart from './Cart';
import classes from './CartOverLay.module.css';
import Button from '../Ui/Button';
import { uiActions } from '../../store/slicers/uiSlice';

class CartOverLay extends Component {
    render() {
        const { cart, selecetdSymbol } = this.props;
        const itemsLength = cart.items.length === 0 ? false : true;
        return (
            <Model>
                {' '}
                <section className={classes['overlay-container']}>
                    <div>
                        <Cart />
                        {itemsLength && (
                            <>
                                <div className={classes.total}>
                                    {' '}
                                    <p>Total</p>
                                    <p>
                                        {selecetdSymbol} {cart.totalAmount}
                                    </p>
                                </div>
                                <div className={classes['overlay-btn']}>
                                    <div>
                                        <Link to='/cart'>
                                            <Button
                                                value={'VIEW BAG'}
                                                disabled={false}
                                                onButtonClick={(e) =>
                                                    this.props.showOverlay(
                                                        false
                                                    )
                                                }
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <Button
                                            value={'CHECK OUT'}
                                            disabled={false}
                                            onButtonClick={(e) =>
                                                console.log(e)
                                            }
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </Model>
        );
    }
}
const mapStateToProps = (state) => ({
    cart: state.cart,
    selecetdSymbol: state.currency.selectedSymbol,
});
const mapDispatchToProps = (dispatch) => {
    return {
        showOverlay: (item) => dispatch(uiActions.showOverlay(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartOverLay);
