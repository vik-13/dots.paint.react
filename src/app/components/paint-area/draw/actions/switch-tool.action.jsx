export default function (store, tool) {
    store.dispatch({
        type: 'SWITCH_TOOL',
        payload: tool
    });
}