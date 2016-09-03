export function addLayout(layout) {
    return {
        type: 'ADD_LAYOUT',
        payload: layout
    };
}

export function removeLayout(id) {
    return {
        type: 'REMOVE_LAYOUT',
        payload: id
    };
}

export function selectLayout(index) {
    return {
        type: 'SELECT_LAYOUT',
        payload: index
    };
}

export function toggleEndless(id) {
    return {
        type: 'TOGGLE_ENDLESS_LAYOUT',
        id: id
    };
}

export function toggleVisibility(id) {
    return {
        type: 'TOGGLE_VISIBILITY_LAYOUT',
        id: id
    };
}

export function toggleLock(id) {
    return {
        type: 'TOGGLE_LOCK_LAYOUT',
        id: id
    };
}