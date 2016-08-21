export default function (state = [], action) {
    switch (action.type) {
        case 'ADD_LAYOUT':
            return [...state, action.payload];
        default:
            return state
    }
}