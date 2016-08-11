import Layout from './layout';

export default class DrawLayouts {
    constructor() {
        this.layouts = [];
        this.currentLayout = false;

        this.add();
    }

    add() {
        let layout = new Layout();
        this.layouts.push(layout);

        this.currentLayout = layout;
    }

    remove() {

    }

    getLayouts() {
        return this.layouts;
    }

    getCurrentLayout() {
        return this.currentLayout;
    }

    setCurrentLayout(layout) {
        this.currentLayout = layout;
    }

}
