import { Component } from 'react';
import { connect } from 'react-redux';

import AddToCardIcon from '../Ui/AddToCardIcon';
import classes from './CartIcons.module.css';
import CartOverLay from './CartOverLay';
import { uiActions } from '../../store/slicers/uiSlice';

class CartIcon extends Component {
    modelClickhandler() {
        const { showOverlay, showModel } = this.props;
        showOverlay(!showModel);
    }
    render() {
        const { cart, showModel } = this.props;
        const counter =
            cart.items.length === 0 ? (
                ''
            ) : (
                <span className={classes['cartLength']}>
                    {cart.items.length}
                </span>
            );
        return (
            <div>
                <button
                    className={classes['shopping-section_cart']}
                    onClick={this.modelClickhandler.bind(this)}
                >
                    <AddToCardIcon />
                    {counter}
                </button>
                <section>{showModel && <CartOverLay />}</section>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    cart: state.cart,
    showModel: state.ui.overlayShowen,
});
const mapDispatchToProps = (dispatch) => {
    return {
        showOverlay: (item) => dispatch(uiActions.showOverlay(item)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
