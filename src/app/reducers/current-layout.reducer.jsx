export default function (state = [], action) {
    switch (action.type) {
        case 'SELECT_LAYOUT':
            return action.payload;
        default:
            return state
    }
}