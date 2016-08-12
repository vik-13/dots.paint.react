export default function (state = [], action) {
    switch (action.type) {
        case 'ADD_LAYOUTS':
            return [...state, action.payload];
        default:
            return state
    }
}