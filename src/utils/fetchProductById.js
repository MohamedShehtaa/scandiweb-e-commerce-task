import URL from '../graphql/utils';
import { productByIdQuery } from '../graphql/queries';
import store from '../store/store';
import { uiActions } from '../store/slicers/uiSlice';

const fetchProductById = async (id) => {
    const result = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({
            query: productByIdQuery(id),
        }),
    });
    store.dispatch(
        uiActions.dataStatus({
            success: false,
            isLoading: true,
            error: false,
        })
    );

    // throw error here
    if (!result.ok) {
        store.dispatch(
            uiActions.dataStatus({
                success: false,
                isLoading: false,
                error: true,
            })
        );
        throw new Error('Fetching  Data Failed');
    }

    const resultData = await result.json();

    return resultData.data.product;
};

export default fetchProductById;
