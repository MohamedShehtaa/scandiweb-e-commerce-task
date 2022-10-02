import React, { Component } from 'react';

import Arrow from '../Ui/ArrowButton';
import classes from './ProductImages.module.css';
export default class ProductImages extends Component {
    constructor() {
        super();
        this.state = {
            currentImage: 0,
        };
    }
    nextArrowClickHandler(arrowDirection) {
        if (this.props.images.length > this.state.currentImage + 1) {
            this.setState((prevState) => ({
                currentImage: prevState.currentImage + 1,
            }));
        } else {
            this.setState((prevState) => ({
                currentImage: 0,
            }));
        }
    }
    prevArrowClickHandler(arrowDirection) {
        if (this.state.currentImage !== 0) {
            this.setState((prevState) => ({
                currentImage: prevState.currentImage - 1,
            }));
        } else {
            this.setState((prevState) => ({
                currentImage: this.props.images.length - 1,
            }));
        }
    }
    render() {
        const { currentImage } = this.state;
        const { images, display } = this.props;
        const arrows =
            images.length === 1 ? (
                ''
            ) : (
                <div className={classes.arrows}>
                    <Arrow
                        direction='next'
                        onClickArrow={this.nextArrowClickHandler.bind(this)}
                    />
                    <Arrow
                        direction='previous'
                        onClickArrow={this.prevArrowClickHandler.bind(this)}
                    />
                </div>
            );
        return (
            <div className={classes['images-container']}>
                <img
                    src={images[currentImage]}
                    alt=''
                />
                {display && arrows}
            </div>
        );
    }
}
