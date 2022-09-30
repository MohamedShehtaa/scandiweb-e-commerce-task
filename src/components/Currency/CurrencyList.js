import { Component } from 'react';

import classes from './CurrencyList.module.css';

class CurrencyList extends Component {
    currencyClickHandler(event) {
        this.props.OnChange(event.target.value);
    }
    render() {
        const { label, symbol } = this.props.value;
        return (
            <li>
                <button
                    value={symbol}
                    className={classes.listItem}
                    onClick={this.currencyClickHandler.bind(this)}
                >
                    {symbol} {label}
                </button>
            </li>
        );
    }
}

export default CurrencyList;
