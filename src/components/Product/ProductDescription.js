import React, { Component } from 'react';
import parse from 'html-react-parser';

import classes from './ProductDescription.module.css';
import ProductPrice from './ProductPrice';
import Button from '../Ui/Button';
import AttributeList from './AtrributeList';

class ProductDescription extends Component {
    addToCarTHandler(e) {
        console.log(e);
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
                    />
                ))}

                <div className={classes['product-price']}>
                    <p className='varient'>PRICE:</p>
                    <ProductPrice prices={product.prices} />
                </div>
                <Button
                    value={'ADD TO CART'}
                    onButtonClick={this.addToCarTHandler.bind(this)}
                    disabled={!product.inStock}
                />
                <div className={classes['product-description']}>
                    {parse(product.description)}
                </div>
            </>
        );
    }
}

export default ProductDescription;
