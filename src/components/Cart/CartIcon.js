import { Component } from 'react';
import { connect } from 'react-redux';


import AddToCardIcon from '../Ui/AddToCardIcon';
import classes from './CartIcons.module.css';
import CartOverLay from './CartOverLay';


class CartIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModel: false,
        };
        this.modelClickhandler = this.modelClickhandler.bind(this);
    }
    modelClickhandler() {
        this.setState((prevState) => ({
            showModel: !prevState.showModel,
        }));
    }
    render() {
        const { items } = this.props.cart;
        const counter =
            items.length === 0 ? (
                ''
            ) : (
                <span className={classes['cartLength']}>{items.length}</span>
            );
        return (
            <div>
                <button
                    className={classes['shopping-section_cart']}
                    onClick={this.modelClickhandler}
                >
                    <AddToCardIcon />
                    {counter}
                </button>
                <section>{this.state.showModel && <CartOverLay />}</section>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    cart: state.cart,
});
export default connect(mapStateToProps)(CartIcon);
