import React, { Component } from 'react';

import classes from './ProductBrand.module.css';
export default class ProductBrand extends Component {
    render() {
        const { name, brand } = this.props;
        return (
            <>
                <h2 className={classes['product-brand']}>{brand}</h2>
                <h3 className={classes['product-name']}>{name}</h3>
            </>
        );
    }
}
