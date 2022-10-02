import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddToCardIcon from '../Ui/AddToCardIcon';
import classes from './ProductCard.module.css';
import { addItemToCart } from '../../store/slicers/cartSlice';
import ProductPrice from './ProductPrice';
import ProductImages from './ProductImages';

class ProductCard extends Component {
    addToCartClickHandler() {
        this.props.addToCart(this.props.product);
    }

    render() {
        const { product } = this.props;
        const inStock = product.inStock;

        return (
            <div
                className={`${classes['product-card']} ${
                    classes[`${!inStock ? 'outOfStock' : ''}`]
                }`}
            >
                <Link to={`/product/details/${product.id}`}>
                    <div className={classes['product-card__container']}>
                        <div className={classes['product-card__image']}>
                            <ProductImages
                                images={product.gallery}
                                display={false}
                            />
                            {!inStock && (
                                <div
                                    className={
                                        classes['product-card__outOfStock']
                                    }
                                >
                                    OUT OF STOCK
                                </div>
                            )}
                        </div>
                        <div className={classes['product-card__desc']}>
                            <p className={classes['product-card__brand']}>
                                {product.brand} {product.name}
                            </p>
                            <ProductPrice prices={product.prices} />
                        </div>
                    </div>
                </Link>
                {inStock && (
                    <div className={classes['product-card__addBtn']}>
                        <button
                            onClick={this.addToCartClickHandler.bind(this)}
                            className={classes['addToCardBtn']}
                        >
                            <AddToCardIcon color='white' />
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch(addItemToCart(item)),
    };
};
export default connect(null, mapDispatchToProps)(ProductCard);
