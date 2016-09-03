export default function (state = false, action) {
    switch (action.type) {
        case 'SELECT_LAYOUT':
            return action.payload;
        default:
            return state
    }
}