import { Component } from 'react';
import { connect } from 'react-redux';

import classes from './CurrencyIcon.module.css';
import CurrencyList from './CurrencyList';
import CurrencyArrow from '../../assets/images/Curruncy-arrow.svg';
import { addCurrentSymbol } from '../../store/slicers/currencySlice';

class CurrencyIcon extends Component {
    render() {
        const { currencies, currentSymbol } = this.props;
        return (
            <section className={classes['select-section']}>
                <button
                    className={classes['select-icon']}
                    value={currentSymbol}
                >
                    <span> {currentSymbol}</span>
                    <img
                        src={CurrencyArrow}
                        alt=''
                    />
                </button>

                <ul className={classes['select-options__container']}>
                    {currencies?.map((currency) => (
                        <CurrencyList
                            value={currency}
                            key={currency.label}
                            OnChange={this.props.currencyListChangeHandler}
                        />
                    ))}
                </ul>
            </section>
        );
    }
}
const mapStateToProps = (state) => ({
    currencies: state?.product?.data?.currencies,
    currentSymbol: state?.currency.selectedSymbol,
});
const mapDispatchToProps = (dispatch) => {
    return {
        currencyListChangeHandler: (currencyValue) =>
            dispatch(addCurrentSymbol(currencyValue)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyIcon);

