export default class Interact {
    constructor(Mouse) {
        this.actives = [];
        this.mouse = Mouse;
    }

    clean() {
        this.actives.length = 0;
    }

    interact(from, to, index, context, path) {
        let isFound = false;
        if (Math.sqrt(Math.pow(to.x - this.mouse.x, 2) + Math.pow(to.y - this.mouse.y, 2)) <= 8) {
            isFound = true;
            this.actives.push({index: index, dot: to});
        }

        if (!isFound && from) {
            if (context.isPointInPath(path, this.mouse.x, this.mouse.y)) {
                isFound = true;
                this.actives.push({index: index - 1, dot: from});
                this.actives.push({index: index, dot: to});
            }
        }
        return isFound;
    }

    getActives() {
        return this.actives;
    }
}