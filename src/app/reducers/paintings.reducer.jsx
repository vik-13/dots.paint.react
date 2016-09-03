const paintingsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PAINTINGS':
            return [...action.payload];
        case 'ADD_PAINTING':
            return [...state, action.payload];
        case 'REMOVE_PAINTING':
            return state.filter(t => {return t.id != action.id});
        default:
            return state;
    }
};

export default paintingsReducer;