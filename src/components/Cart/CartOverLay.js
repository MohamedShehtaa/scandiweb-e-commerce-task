import React, { Component } from 'react';
import { connect } from 'react-redux';

import Model from '../Ui/Model';
import classes from './CartOverLay.module.css';
import EmptyCart from '../../assets/images/empty-state.svg';
import AttributeList from '../Product/AtrributeList';
import ProductPrice from '../Product/ProductPrice';
import ProductImages from '../Product/ProductImages';
class CartOverLay extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
        const { cart } = this.props;
        console.log(cart.items[0].gallery);
        return (
            <Model>
                {' '}
                <div className={classes['overlay-container']}>
                    {cart.items.length === 0 ? (
                        <img
                            src={EmptyCart}
                            alt='Empty Cart'
                        />
                    ) : (
                        <div>
                            {cart.items.map((item) => (
                                <div
                                    key={item.id}
                                    className={classes['cart-des']}
                                >
                                    <div>
                                        <h2
                                            className={classes['product-brand']}
                                        >
                                            {item.brand}
                                        </h2>
                                        <h3 className={classes['product-name']}>
                                            {item.name}
                                        </h3>
                                        <div
                                            className={classes['product-price']}
                                        >
                                            <ProductPrice
                                                prices={item.prices}
                                            />
                                        </div>
                                        {item.attributes.map((attr) => (
                                            <AttributeList
                                                items={attr.items}
                                                name={attr.name}
                                                key={attr.id}
                                                type={attr.type}
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <div>
                                            <button>+</button>
                                            <button> - </button>
                                        </div>
                                        <div className={classes.images}>
                                            <ProductImages
                                                images={item.gallery}
                                                display={item.inStock}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Model>
        );
    }
}
const mapStateToProps = (state) => ({
    cart: state.cart,
});
const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CartOverLay);
