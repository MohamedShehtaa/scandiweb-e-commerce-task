import { Component } from 'react';
// import { connect } from 'react-redux';

import ProductCard from '../components/Product/ProductCard';
import classes from './CategoryPage.module.css';

class CategoryPage extends Component {
    render() {
        const { category } = this.props;

        return (
            <>
                <h1 className={classes['category-name']}>{category.name} </h1>
                <section className={classes['category-products']}>
                    {category.products.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        );
                    })}
                </section>
            </>
        );
    }
}

export default CategoryPage;
