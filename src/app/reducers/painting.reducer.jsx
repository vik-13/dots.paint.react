const paintingReducer = (state = false, action) => {
    switch (action.type) {
        case 'SELECT_PAINTING':
            return action.payload;
        default:
            return state;
    }
};

export default paintingReducer;