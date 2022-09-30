import { Component } from 'react';
import { connect } from 'react-redux';

import withRouter from '../utils/WithRouterHOC';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
        };
    }
    componentDidMount() {
        const { categories, params } = this.props;
        const allProducts = categories.find(
            (products) => products.name === 'all'
        ).products;
        const currentProduct = allProducts.find(
            (currProduct) => currProduct.id === params.id
        );
        this.setState({
            product: currentProduct,
        });
    }
    render() {
        const { product } = this.state;
        return <div>{product.brand}</div>;
    }
}
const mapStateToProps = (state) => ({
    categories: state.product.data.categories,
});
export default connect(mapStateToProps)(withRouter(ProductPage));
