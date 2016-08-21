export default function (state = 'dot', action) {
    switch (action.type) {
        case 'SWITCH_TOOL':
            return action.payload;
        default:
            return state
    }
}