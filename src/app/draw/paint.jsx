export default class Paint {
    constructor(drawLayouts) {
        this.drawLayouts = drawLayouts;
        this.highlights = [];
        this.isMoving = false;
    }

    update(x, y) {
        var layout = this.drawLayouts.getCurrentLayout(),
            i, r;

        if (!this.isMoving) {
            this.highlights.length = 0;

            for (i = 0; i < layout.dots.length; i++) {
                r = Math.sqrt(Math.pow(layout.dots[i].x - x, 2) + Math.pow(layout.dots[i].y - y, 2));
                if (r <= 5) {
                    layout.dots[i].highlight = true;
                    this.highlights.push(layout.dots[i]);
                } else {
                    layout.dots[i].highlight = false;
                }
            }
        } else {
            for (i = 0; i < this.highlights.length; i++) {
                this.highlights[i].x = x;
                this.highlights[i].y = y;
            }
        }
    }

    down() {
        if (this.highlights.length >= 1) {
            this.isMoving = true;
        }
    }

    up(x, y) {
        if (this.isMoving) {
            this.isMoving = false;
        } else {
            this.drawLayouts.getCurrentLayout().push(x, y);
        }
    }
}
