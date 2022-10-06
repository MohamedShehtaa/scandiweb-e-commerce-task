import React, { Component } from 'react';

import AttirbuteBtn from '../Ui/AttirbuteBtn';

import classes from './AtrributeList.module.css';
class AttributeList extends Component {
    constructor() {
        super();
        this.state = {
            choosenAttr: {
                name: '',
                value: '',
            },
        };
    }
    componentDidMount() {
        // if i put default value for the component where i use (cart +overlay ) show default value of attributes if not (product PDP)
        const { defaultValues } = this.props;
        if (defaultValues) {
            const currAttribute = defaultValues.find(
                (value) => value.name === this.props.name
            );
            this.setState({
                choosenAttr: {
                    name: currAttribute.name,
                    value: currAttribute.value,
                },
            });
        }
    }
    componentDidUpdate(prev, curr) {
        const { choosenAttr } = this.state;
        if (choosenAttr.value !== curr.choosenAttr.value) {
            this.props.onChoosenAttributes(choosenAttr);
        }
    }
    attrbuiteClickHandler(selectedAttr) {
        const { name } = this.props;
        this.setState((prev) => ({
            choosenAttr: {
                name: name,
                value: selectedAttr,
            },
        }));
    }
    render() {
        const { choosenAttr } = this.state;
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
                            choosen={choosenAttr.value}
                            type={type}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
export default AttributeList;
