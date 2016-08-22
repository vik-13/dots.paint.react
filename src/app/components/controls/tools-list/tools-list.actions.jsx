export default function switchTool(name) {
    return {
        type: 'SWITCH_TOOL',
        payload: name
    };
}