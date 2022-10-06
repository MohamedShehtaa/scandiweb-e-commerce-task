import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddToCardIcon from '../Ui/AddToCardIcon';
import classes from './ProductCard.module.css';
import { addItemToCart } from '../../store/slicers/cartSlice';
import ProductPrice from './ProductPrice';
import ProductImages from './ProductImages';
import defaultAtrribute from '../../utils/defaultAttribute';

class ProductCard extends Component {
    // this here because if i added the product to cart in PLP without any attributes values
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
    componentDidMount() {
        //if i didn't choose any value of  attributes it will be added a first value of  attribute
        const { attributes } = this.props.product;
        const defaultAttr = defaultAtrribute(attributes);
        this.setState({
            allChoosenAttributes: [...defaultAttr],
        });
    }
    addToCartClickHandler() {
        //send product to render and the default values of the attributes to set in ui 
        const { product, addToCart } = this.props;
        const { allChoosenAttributes, totalPrice } = this.state;
        addToCart({
            ...product,
            choosenAttributes: allChoosenAttributes,
            currentPrice: totalPrice,
        });
    }
    getTotalPrice( itemTotalPrice ) {
        // to obtain from price component on total price of the same product to send it to cart to handle all total price for products 
        this.setState({
            totalPrice: itemTotalPrice,
        });
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
                            <p>
                                {product.brand} {product.name}
                            </p>
                            <ProductPrice
                                prices={product.prices}
                                quantity={1}
                                onPriceChange={this.getTotalPrice.bind(this)}
                            />
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
