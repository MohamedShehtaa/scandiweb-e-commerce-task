import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './ProductPrice.module.css';

class ProductPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAmount: this.props.prices[0].amount,
        };
    }
    // to change the currency of website if i switch the currency symbol in any page
    componentDidUpdate(prev, curr) {
        const { currentSymbol, prices, onPriceChange, quantity } = this.props;
        let currentCurrency = '';
        if (prev.currentSymbol !== currentSymbol) {
            currentCurrency = prices.find(
                (price) => price.currency.symbol === currentSymbol
            );

            this.setState({
                currentAmount: currentCurrency.amount,
            });
        }

        if (
            prev.quantity !== quantity ||
            prev.currentSymbol !== currentSymbol
        ) {
            // to send the total price of the single product to cart
            onPriceChange({
                symbol: currentSymbol,
                totalAmount: currentCurrency.amount * quantity,
            });
        }
    }
    render() {
        const { currentAmount } = this.state;
        const { currentSymbol, quantity } = this.props;
        return (
            <p className={classes['product-card__price']}>
                {currentSymbol} {currentAmount * quantity}
            </p>
        );
    }
}
const mapStateToProps = (state) => ({
    currentSymbol: state.currency.selectedSymbol,
});
export default connect(mapStateToProps)(ProductPrice);
