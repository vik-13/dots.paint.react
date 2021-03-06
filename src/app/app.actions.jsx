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

export function addPaintings(store, paintings) {
    store.dispatch({
        type: 'ADD_PAINTINGS',
        payload: paintings
    });
}

export function selectPainting(store, index) {
    store.dispatch({
        type: 'SELECT_PAINTING',
        payload: index
    });
}