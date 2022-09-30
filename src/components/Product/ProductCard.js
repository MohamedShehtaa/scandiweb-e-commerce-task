import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddToCardIcon from '../Ui/AddToCardIcon';
import Arrow from '../Ui/ArrowButton';
import classes from './ProductCard.module.css';
import { addItemToCart } from '../../store/slicers/cartSlice';

class ProductCard extends Component {
    constructor() {
        super();
        this.state = {
            currentImage: 0,
            currentAmount: 0,
        };
    }

    componentDidMount() {
        this.setState({
            currentAmount: this.props.product.prices[0].amount,
        });
    }
    componentDidUpdate(prev, curr) {
        const { currentSymbol } = this.props;
        const { prices } = this.props.product;
        if (prev.currentSymbol !== currentSymbol) {
            const filteredAmount = prices.find(
                (price) => price.currency.symbol === currentSymbol
            );
            this.setState({
                currentAmount: filteredAmount.amount,
            });
        }
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
        const { product, currentSymbol } = this.props;
        const { currentAmount, currentImage } = this.state;
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
                            <small className={classes['product-card__price']}>
                                {currentSymbol} {currentAmount}
                            </small>
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
const mapStateToProps = (state) => ({
    currentSymbol: state.currency.selectedSymbol,
});
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch(addItemToCart(item)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
