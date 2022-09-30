import { Fragment, Component } from 'react';

import classes from './Layout.module.css';
import Header from './Header';
import ErrorBoundary from './ErrorBoundery';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <ErrorBoundary>
                    <Header />
                    <main className={classes.main}> {this.props.children}</main>
                </ErrorBoundary>
            </Fragment>
        );
    }
}

export default Layout;
