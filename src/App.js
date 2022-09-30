import React, { Component, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/Ui/LoadingSpinner';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import Notifcation from './components/Ui/Notifcation';

const NotFound = React.lazy(() => import('./pages/NotFound'));

class App extends Component {
    render() {
        const { categories } = this.props.product;

        if (!this.props.isSuccess) {
            return <Notifcation />;
        } else {
            return (
                <Layout>
                    <Suspense
                        fallback={
                            <div className='centered'>
                                {' '}
                                <LoadingSpinner />
                            </div>
                        }
                    >
                        <Routes>
                            <Route
                                path='/'
                                element={<Navigate to='/categories/all' />}
                            />
                            <Route path='/categories'>
                                {categories?.map((category) => {
                                    return (
                                        <Route
                                            key={category.name}
                                            path={category.name}
                                            element={
                                                <CategoryPage
                                                    category={category}
                                                />
                                            }
                                        />
                                    );
                                })}
                            </Route>
                            <Route path='/product/details'>
                                <Route
                                    path=':id'
                                    element={<ProductPage />}
                                />
                            </Route>
                            <Route
                                path='*'
                                element={<NotFound />}
                            />
                        </Routes>
                    </Suspense>
                </Layout>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    product: state?.product?.data,
    isSuccess: state?.status.status.success,
});
export default connect(mapStateToProps)(App);
