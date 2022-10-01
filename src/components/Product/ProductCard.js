import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddToCardIcon from '../Ui/AddToCardIcon';
import Arrow from '../Ui/ArrowButton';
import classes from './ProductCard.module.css';
import { addItemToCart } from '../../store/slicers/cartSlice';
import ProductPrice from './ProductPrice';

class ProductCard extends Component {
    constructor() {
        super();
        this.state = {
            currentImage: 0,
        };
    }

    addToCartClickHandler() {
        this.props.addToCart(this.props.product);
    }
    nextArrowClickHandler(arrowDirection) {
        if (this.props.product.gallery.length > this.state.currentImage + 1) {
            this.setState((prevState) => ({
                currentImage: prevState.currentImage + 1,
            }));
        } else {
            this.setState((prevState) => ({
                currentImage: 0,
            }));
        }
    }
    prevArrowClickHandler(arrowDirection) {
        if (this.state.currentImage !== 0) {
            this.setState((prevState) => ({
                currentImage: prevState.currentImage - 1,
            }));
        } else {
            this.setState((prevState) => ({
                currentImage: this.props.product.gallery.length - 1,
            }));
        }
    }

    render() {
        const { product } = this.props;
        const { currentImage } = this.state;
        const inStock = product.inStock;
        const arrows =
            product.gallery.length === 1 ? (
                ''
            ) : (
                <div className={classes.arrows}>
                    <Arrow
                        direction='next'
                        onClickArrow={this.nextArrowClickHandler.bind(this)}
                    />
                    <Arrow
                        direction='previous'
                        onClickArrow={this.prevArrowClickHandler.bind(this)}
                    />
                </div>
            );
        return (
            <div
                className={`${classes['product-card']} ${
                    classes[`${!inStock ? 'outOfStock' : ''}`]
                }`}
            >
                <Link to={`/product/details/${product.id}`}>
                    <div className={classes['product-card__container']}>
                        <div className={classes['product-card__image']}>
                            <img
                                src={product.gallery[currentImage]}
                                alt=''
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
                {inStock && arrows}
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
