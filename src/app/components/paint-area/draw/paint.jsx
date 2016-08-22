import store from '../../../store/store';

export default class Paint {
    constructor(Layouts, Interact, Mouse) {
        this.layouts = Layouts;
        this.interact = Interact;
        this.mouse = Mouse;

        this.tool = 'line';
        this.movement = {
            isActive : false,
            index: -1
        };

        store.subscribe(this.update.bind(this));
    }

    update() {
        var state = store.getState();
        if (this.tool != state.tool) {
            this.tool = state.tool;
        }
    }

    split(from) {
        this.layouts.getCurrentLayout().pushAfterIndex(from.index, this.mouse.x, this.mouse.y);
    }

    down() {
        let actives = this.interact.getActives();

        if (this.tool == 'move') {
            console.log(actives);
            if (actives.length == 1) {
                this.movement.isActive = true;
                this.movement.index = actives[0].index;
            }
        }
    }

    move() {
        var layout = this.layouts.getCurrentLayout();
        if (this.movement.isActive) {
            layout.dots[this.movement.index].x = this.mouse.x;
            layout.dots[this.movement.index].y = this.mouse.y;
        }
    }

    up() {
        let actives = this.interact.getActives();

        if (this.tool == 'move') {
            this.movement.isActive = false;
            this.movement.index = -1;
        } else if (this.tool == 'line') {
            this.layouts.getCurrentLayout().push(this.mouse.x, this.mouse.y);
        } else if (this.tool == 'split') {
            if (actives.length == 2) {
                this.split(actives[0]);
            }
        }
    }
}
