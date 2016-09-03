export const addPainting = (painting) => {
    return {
        type: 'ADD_PAINTING',
        payload: painting
    };
};

export const removePainting = (id) => {
    return {
        type: 'REMOVE_PAINTING',
        payload: id
    };
};