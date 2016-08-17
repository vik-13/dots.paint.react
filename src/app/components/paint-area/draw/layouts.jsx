import Layout from './layout';

import store from '../../../store/store';
import addLayout from './actions/addLayout';

export default class DrawLayouts {
    constructor() {
        this.layouts = store.getState().layouts;
        this.currentLayout = false;

        store.subscribe(() => {
            this.layouts = store.getState().layouts;
        });

        this.add();
    }

    add() {
        let layout = new Layout();
        //this.layouts.push(layout);

        addLayout(store, layout);

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
