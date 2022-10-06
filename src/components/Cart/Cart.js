import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Cart.module.css';
import EmptyCart from '../../assets/images/empty-state.svg';
import AttributeList from '../Product/AtrributeList';
import ProductPrice from '../Product/ProductPrice';
import ProductImages from '../Product/ProductImages';
import ProductBrand from '../Product/ProductBrand';
import Quantity from './Quantity';

//to use this component in different places (cart +overlay)
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemQuantity: 1,
        };
    }
    changeQuanittyhandler(quantity) {
        this.setState({
            itemQuantity: quantity,
        });
    }
    getTotalPrice(itemTotalPrice) {}
    render() {
        const { cart } = this.props;

        return (
            <div className={classes['cart-container']}>
                {' '}
                {cart.items.length === 0 ? (
                    <img
                        src={EmptyCart}
                        alt='Empty Cart'
                    />
                ) : (
                    <div className={classes['items']}>
                        {cart.items.map((item, index) => (
                            <div
                                key={index}
                                className={classes.item}
                            >
                                <div className={classes['item.desc']}>
                                    <ProductBrand
                                        name={item.name}
                                        brand={item.brand}
                                    />
                                    <ProductPrice
                                        prices={item.prices}
                                        quantity={item.quantity}
                                        onPriceChange={this.getTotalPrice.bind(
                                            this
                                        )}
                                    />

                                    {item.attributes.map((attr) => (
                                        <AttributeList
                                            items={attr.items}
                                            name={attr.name}
                                            key={attr.id}
                                            type={attr.type}
                                            onChoosenAttributes={(e) =>
                                                console.log(e)
                                            }
                                            defaultValues={
                                                item.choosenAttributes
                                            }
                                        />
                                    ))}
                                </div>
                                <div className={classes['quantity-container']}>
                                    <Quantity item={item} />
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
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
