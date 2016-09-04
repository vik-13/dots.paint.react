const layout = (state, action) => {
    switch (action.type) {
        case 'ADD_LAYOUT':
            return action.payload;
        case 'REMOVE_LAYOUT':
            return state.id != action.payload;
        case 'STORE_DOTS':
            if (state.id != action.id) {
                return state;
            }
            return {...state,
                dots: action.payload
            };
        case 'TOGGLE_ENDLESS_LAYOUT':
            if (state.id != action.id) {
                return state;
            }
            return {...state,
                endless: !state.endless
            };
        case 'TOGGLE_VISIBILITY_LAYOUT':
            if (state.id != action.id) {
                return state;
            }
            return {...state,
                visibility: !state.visibility
            };
        case 'TOGGLE_LOCK_LAYOUT':
            if (state.id != action.id) {
                return state;
            }
            return {...state,
                lock: !state.lock
            };
        default:
            return state;
    }
};

export default function (state = [], action) {
    switch (action.type) {
        case 'ADD_LAYOUTS':
            return [...action.payload];
        case 'REMOVE_LAYOUTS':
            return [];
        case 'ADD_LAYOUT':
            return [...state, layout(undefined, action)];
        case 'REMOVE_LAYOUT':
            return state.filter(t => layout(t, action));
        case 'STORE_DOTS':
            return state.map(t => layout(t, action));
        case 'TOGGLE_ENDLESS_LAYOUT':
            return state.map(t => layout(t, action));
        case 'TOGGLE_VISIBILITY_LAYOUT':
            return state.map(t => layout(t, action));
        case 'TOGGLE_LOCK_LAYOUT':
            return state.map(t => layout(t, action));
        default:
            return state;
    }
}