export default class Interact {
    constructor(Paint) {
        this.type = 'none'; // 'dot', 'line'
        this.paint = Paint;
    }

    interact(from, to, context, path) {
        let mousePosition = this.paint.getMousePosition();
        let type = 'none';
        if (Math.sqrt(Math.pow(to.x - mousePosition.x, 2) + Math.pow(to.y - mousePosition.y, 2)) <= 5) {
            type = 'dot';
        }

        if (type == 'none' && from) {
            if (context.isPointInPath(path, mousePosition.x, mousePosition.y)) {
                type = 'line';
            }
        }
        return (type != 'none');
    }
}