export default function (store, layout) {
    store.dispatch({
        type: 'ADD_LAYOUT',
        payload: layout
    });
}