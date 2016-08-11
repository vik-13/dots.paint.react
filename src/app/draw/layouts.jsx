import Layout from './layout';

let layouts = [];
let currentLayout = false;
export default class DrawLayouts {
    static add() {
        let layout = new Layout();
        layouts.push(layout);

        currentLayout = layout;
    }

    static remove() {

    }

    static getLayouts() {
        return layouts;
    }

    static getCurrentLayout() {
        return currentLayout;
    }

    static setCurrentLayout(layout) {
        currentLayout = layout;
    }

}
