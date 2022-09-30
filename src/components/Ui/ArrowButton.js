import { Component } from 'react';

import classes from './ArrowButton.module.css';
class Arrow extends Component {
    arrowClickHandler(event) {
        this.props.onClickArrow(event.target.value);
    }
    render() {
        const { direction } = this.props;
        const arrowDirc =
            direction === 'next' ? classes.next : classes.previous;

        return (
            <button
                className={`${classes['arrow']} ${arrowDirc} `}
                onClick={this.arrowClickHandler.bind(this)}
                value={direction}
            ></button>
        );
    }
}

export default Arrow;
