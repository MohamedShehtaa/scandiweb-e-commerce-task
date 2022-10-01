import { Component } from 'react';
import { connect } from 'react-redux';
import Gallery from '../components/Product/Gallery';
import ProductDescription from '../components/Product/ProductDescription';

import withRouter from '../utils/WithRouterHOC';
import classes from './ProductPage.module.css';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
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
        this.setState((prev) => ({
            product: currentProduct,
        }));
    }
    render() {
        const { product } = this.state;

        if (product.length === 0) return <p>Loading...</p>;
        else
            return (
                <section className={classes['product-page']}>
                    <>
                        <section className={classes['product-page__images']}>
                            <Gallery images={product.gallery} />
                        </section>
                        <section
                            className={classes['product-page__description']}
                        >
                            <ProductDescription product={product} />
                        </section>
                    </>
                </section>
            );
    }
}
const mapStateToProps = (state) => ({
    categories: state?.product?.data?.categories,
});
export default connect(mapStateToProps)(withRouter(ProductPage));
