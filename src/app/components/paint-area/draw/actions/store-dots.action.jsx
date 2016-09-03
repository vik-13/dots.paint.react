export default function (store, dots) {
    store.dispatch({
        type: 'STORE_DOTS',
        payload: dots
    });
}