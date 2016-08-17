import Layout from '../../paint-area/draw/layout';

export function addLayout(name) {
    return {
        type: 'ADD_LAYOUT',
        payload: new Layout(name)
    };
}