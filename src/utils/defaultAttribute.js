//default values in case i add the product without select the values of the attributes

const defaultAtrribute = ( attributes ) => {
    const defaultAtrr = attributes.map((attr) => {
        return {
            name: attr.name,
            value: attr.items[0].value,
        };
    });

    return defaultAtrr;
};

export default defaultAtrribute;
