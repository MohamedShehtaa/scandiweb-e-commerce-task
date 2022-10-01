import React, { Component } from 'react';
import parse from 'html-react-parser';

import ProductColor from './ProductColor';
import classes from './ProductDescription.module.css';
import ProductPrice from './ProductPrice';
import ProductSize from './ProductSize';

class ProductDescription extends Component {
    render() {
        const { product } = this.props;
        return (
            <>
                <h2 className={classes['product-brand']}>{product.brand}</h2>
                <h3 className={classes['product-name']}>{product.name}</h3>
                <ProductSize attributes={product.attributes} />
                <ProductColor attributes={product.attributes} />
                <div className={classes['product-price']}>
                    <p className='varient'>price:</p>
                    <ProductPrice prices={product.prices} />
                </div>
                <button>Add To CART</button>
                <div className={classes['product-description']}>
                    {' '}
                    {parse(product.description)}
                </div>
            </>
        );
    }
}
export default ProductDescription;
