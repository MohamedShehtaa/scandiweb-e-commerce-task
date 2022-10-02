import React, { Component } from 'react';
import AttirbuteBtn from '../Ui/AttirbuteBtn';

import classes from './AtrributeList.module.css';
class AttributeList extends Component {
    constructor() {
        super();
        this.state = {
            choosen: '',
        };
    }
    attrbuiteClickHandler(selectedAttr) {
        this.setState((prev) => ({
            choosen: selectedAttr,
        }));
    }
    render() {
        const { choosen } = this.state;
        const { name, type, items } = this.props;
        return (
            <div>
                <p className='varient'>{name.toUpperCase()}:</p>
                <div className={classes['sizes-container']}>
                    {items.map((item) => (
                        <AttirbuteBtn
                            key={item.id}
                            onClickAttribute={this.attrbuiteClickHandler.bind(
                                this
                            )}
                            value={item.value}
                            choosen={choosen}
                            type={type}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
export default AttributeList;
