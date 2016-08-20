export default class Paint {
    constructor(Layouts) {
        this.layouts = Layouts;
        this.isMoving = false;
        this.mousePosition = {
            x: 0,
            y: 0
        };
    }

    update(x, y) {

    }

    checkDotsHover(layout, x, y) {
        layout.dots.forEach((dot) => {
            let r = Math.sqrt(Math.pow(dot.x - x, 2) + Math.pow(dot.y - y, 2));
            dot.highlight = (r <= 5);
        });
    }

    checkLinesHover() {

    }

    down() {

    }

    move(x, y) {
        let layout = this.layouts.getCurrentLayout();

        if (!this.isMoving) {
            this.checkDotsHover(layout, x, y);
        }

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
