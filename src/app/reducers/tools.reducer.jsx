export default function (state = 'line', action) {
    switch (action.type) {
        case 'SWITCH_TOOL':
            return action.payload;
        default:
            return state
    }
}