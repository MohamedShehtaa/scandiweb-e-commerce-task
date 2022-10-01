import React, { Component } from 'react';

import classes from './Gallery.module.css';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.images[0],
        };
    }
    render() {
        const { images } = this.props;
        return (
            <>
                <section className={classes['sub-images']}>
                    {images.map((image) => (
                        <div
                            className={classes['sub-imgae__container']}
                            key={image}
                        >
                            <img
                                onMouseEnter={() => this.setState({ image })}
                                src={image}
                                alt='gallery'
                            />
                        </div>
                    ))}
                </section>
                <section className={classes['main-image']}>
                    <img
                        src={this.state.image}
                        alt='gallery'
                    />
                </section>
            </>
        );
    }
}

export default Gallery;
