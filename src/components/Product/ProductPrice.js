import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './ProductPrice.module.css';

class ProductPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAmount: 0,
        };
    }
    componentDidMount() {
        this.setState({
            currentAmount: this.props.prices[0].amount,
        });
    }
    componentDidUpdate(prev, curr) {
        const { currentSymbol, prices } = this.props;
        if (prev.currentSymbol !== currentSymbol) {
            const filteredAmount = prices.find(
                (price) => price.currency.symbol === currentSymbol
            );
            this.setState({
                currentAmount: filteredAmount.amount,
            });
        }
    }
    render() {
        const { currentAmount } = this.state;
        const { currentSymbol } = this.props;
        return (
            <small className={classes['product-card__price']}>
                {currentSymbol} {currentAmount}
            </small>
        );
    }
}
const mapStateToProps = (state) => ({
    currentSymbol: state.currency.selectedSymbol,
});
export default connect(mapStateToProps)(ProductPrice);
