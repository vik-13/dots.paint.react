export function addLayouts(store, layouts) {
    store.dispatch({
        type: 'ADD_LAYOUTS',
        payload: layouts
    });
}

export function selectLayout(store, index) {
    store.dispatch({
        type: 'SELECT_LAYOUT',
        payload: index
    });
}