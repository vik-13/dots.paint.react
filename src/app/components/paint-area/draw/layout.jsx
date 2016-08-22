export default class Layout {
    constructor(name) {
        this.name = name;
        this.visibility = true;
        this.locked = false;
        this.dots = [];
    }

    push(x, y) {
        this.dots.push({
            x: x,
            y: y
        });
    }

    pushAfterIndex(index, x, y) {
        this.dots.splice(index + 1, 0, {x: x, y: y});
    }
}