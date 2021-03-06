import store from '../../../store/store';

import storeDotsAction from './actions/store-dots.action';

export default class Layouts {
    constructor() {
        this.layouts = store.getState().layouts;
        this.currentLayout = store.getState().layout;

        store.subscribe(() => {
            var state = store.getState();
            this.currentLayout = state.layout;
            this.layouts = state.layouts;
        });
    }

    push(x, y) {
        if (!this.getCurrentLayout().dots) {
            this.getCurrentLayout().dots = [];
        }
        this.getCurrentLayout().dots.push({
            x: x,
            y: y
        });
        this.store();
    }

    pushAfterIndex(index, x, y) {
        this.getCurrentLayout().dots.splice(index + 1, 0, {x: x, y: y});
        this.store();
    }

    move(x, y, index) {
        if (index == this.getCurrentLayout().dots.length) {
            index = 0;
        }
        this.getCurrentLayout().dots[index].x = x;
        this.getCurrentLayout().dots[index].y = y;
        this.store();
    }

    removeDot(index) {
        this.getCurrentLayout().dots.splice(index, 1);
    }

    store() {
        storeDotsAction(store, this.getCurrentLayout().dots);
    }

    getLayouts() {
        return this.layouts;
    }

    getCurrentLayout() {
        return this.layouts[this.currentLayout];
    }

}
