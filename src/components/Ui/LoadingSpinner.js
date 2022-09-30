import { Component } from 'react';

import classes from './LoadingSpinner.module.css';

class LoadingSpinner extends Component {
    render() {
        return <div className={classes.spinner}></div>;
    }
}

export default LoadingSpinner;
