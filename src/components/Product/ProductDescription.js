import React, { Component } from 'react';
import parse from 'html-react-parser';
import { connect } from 'react-redux';

import classes from './ProductDescription.module.css';
import ProductPrice from './ProductPrice';
import Button from '../Ui/Button';
import AttributeList from './AtrributeList';
import defaultAtrribute from '../../utils/defaultAttribute';
import { addItemToCart } from '../../store/slicers/cartSlice';
import filteredChoosen from '../../utils/filteredChossenArray';

class ProductDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allChoosenAttributes: [],
            totalPrice: {
                symbol: '$',
                totalAmount: this.props.product.prices[0].amount,
            },
        };
    }
    //in case the user didn't select the values of the attributes in PDP and click addto cart , default values it will be set
    componentDidMount() {
        const { attributes } = this.props.product;
        const defaultAttr = defaultAtrribute(attributes);
        this.setState({
            allChoosenAttributes: [...defaultAttr],
        });
    } 
    // received the selected values of the target attribute and push to the array (allChoosenAttributes) to send to cart
    choosenAttributes(choosenAtrr) {
        const { allChoosenAttributes } = this.state;
        // to guarantee not duplication the  select value in the array 
        const filtered = allChoosenAttributes.find(
            (item) => item.value === choosenAtrr.value
        );
        if (!filtered) {
            this.setState((prev) => {
                return {
                    allChoosenAttributes: [
                        ...prev.allChoosenAttributes,
                        choosenAtrr,
                    ],
                };
            });
        }
    }
    getTotalPrice(itemTotalPrice) {
        this.setState({
            totalPrice: itemTotalPrice,
        });
    }
    addToCartHandler() {
        const { product, addToCart } = this.props;
        const { allChoosenAttributes, totalPrice } = this.state;
        // to garauntee the last values of the attributes which the user selected before click add to cart
        const choosenAttrs = filteredChoosen(allChoosenAttributes);
        addToCart({
            ...product,
            choosenAttributes: choosenAttrs,
            currentPrice: totalPrice,
        });
    }
    render() {
        const { product } = this.props;
        return (
            <>
                <h2 className={classes['product-brand']}>{product.brand}</h2>
                <h3 className={classes['product-name']}>{product.name}</h3>
                {product.attributes.map((attr) => (
                    <AttributeList
                        items={attr.items}
                        name={attr.name}
                        key={attr.id}
                        type={attr.type}
                        onChoosenAttributes={this.choosenAttributes.bind(this)}
                        defaultValues={''}
                    />
                ))}

                <div className={classes['product-price']}>
                    <p className='varient'>PRICE:</p>
                    <ProductPrice
                        prices={product.prices}
                        quantity={1}
                        onPriceChange={this.getTotalPrice.bind(this)}
                    />
                </div>
                <Button
                    value={'ADD TO CART'}
                    onButtonClick={this.addToCartHandler.bind(this)}
                    disabled={!product.inStock}
                />
                <div className={classes['product-description']}>
                    {parse(product.description)}
                </div>
            </>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch(addItemToCart(item)),
    };
};

export default connect(null, mapDispatchToProps)(ProductDescription);
