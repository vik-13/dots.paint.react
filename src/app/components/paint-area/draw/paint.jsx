import store from '../../../store/store';

export default class Paint {
    constructor(Layouts) {
        this.layouts = Layouts;
        this.tool = 'dot';
        this.isMoving = false;
        this.mousePosition = {
            x: 0,
            y: 0
        };

        store.subscribe(this.update.bind(this));
    }

    update() {
        var state = store.getState();
        if (this.tool != state.tool) {
            this.tool = state.tool;
        }
    }

    down() {

    }

    move(x, y) {
        this.mousePosition.x = x;
        this.mousePosition.y = y;
    }

    up(x, y) {
        if (this.isMoving) {
            this.isMoving = false;
        } else {
            this.layouts.getCurrentLayout().push(x, y);
        }
    }

    getMousePosition() {
        return this.mousePosition;
    }
}
