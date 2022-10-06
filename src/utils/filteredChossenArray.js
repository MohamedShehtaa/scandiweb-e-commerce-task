// in case i select many values for single attribute without add to cart
// to guarantee the last value of user selection
function filteredChoosen(items) {
    const requiredItems = [];
    for (const item of items) {
        const index = requiredItems.findIndex((i) => i.name === item.name);
        if (index > -1) {
            requiredItems.splice(index, 1, item);
        } else {
            requiredItems.push(item);
        }
    }
    return requiredItems;
}
export default filteredChoosen;
