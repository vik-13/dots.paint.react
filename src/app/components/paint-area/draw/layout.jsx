export default class Layout {
    constructor(name) {
        this.name = name;
        this.visibility = true;
        this.locked = false;
        this.endless = true;
        this.dots = [];
    }

    push(x, y) {
        this.dots.push({
            x: x,
            y: y,
            highlight: true
        });
    }
}