import URL from '../graphql/utils';
import { dataQuery } from '../graphql/queries';
import store from '../store/store';
import { uiActions } from '../store/slicers/uiSlice';

// fetch data from graphQl endpoint
const fetchData = async () => {
    const result = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({
            query: dataQuery,
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
    const finalData = await resultData.data;

    return finalData;
};

export default fetchData;
