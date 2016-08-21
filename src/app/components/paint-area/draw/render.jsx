export default class Render {
    constructor(canvasId, Layouts, Paint, Interact) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.size = {
            x: 320,
            y: 200
        };
        this.additionalDrawings = [];
        this.layouts = Layouts;
        this.paint = Paint;
        this.interact = Interact;
    }

    update() {
        this.clean();

        this.additionalDrawings.length = 0;

        this.renderLayouts();

        if (this.additionalDrawings.length) {
            this.renderAdditionalDrawings();
        }
    }

    clean() {
        this.context.fillStyle = '#ffffff';
        this.context.fillRect( 0, 0, this.size.x, this.size.y );
    }

    renderLayouts() {
        var layouts = this.layouts.getLayouts();
        layouts.forEach((layout) => {
            if (layout.dots.length >= 1 && layout.visibility) {
                this.renderLayout(layout);
            }
        });
    }

    calculateRectCoords(from, to) {
        var a, b, c, m, m2, rect = [],
            d = 1;

        a = to.y - from.y;
        b = from.x - to.x;
        c = (to.x * from.y) - (from.x * to.y);

        if (a == 0) {
            rect.push({x: from.x, y: from.y - (d / 2)});
            rect.push({x: from.x, y: from.y + (d / 2)});
            rect.push({x: to.x, y: to.y + (d / 2)});
            rect.push({x: to.x, y: to.y - (d / 2)});
        } else if (b == 0) {
            rect.push({x: from.x - (d / 2), y: from.y});
            rect.push({x: from.x + (d / 2), y: from.y});
            rect.push({x: to.x + (d / 2), y: to.y});
            rect.push({x: to.x - (d / 2), y: to.y});
        } else {
            m = - a / b;
            m2 = -1 / m;

            rect.push({
                x: (d / 2) / Math.sqrt(1 + Math.pow(m2, 2)) + from.x,
                y: (m2 * (d / 2)) / Math.sqrt(1 + Math.pow(m2, 2)) + from.y
            });

            rect.push({
                x: - (d / 2) / Math.sqrt(1 + Math.pow(m2, 2)) + from.x,
                y: - (m2 * (d / 2)) / Math.sqrt(1 + Math.pow(m2, 2)) + from.y
            });

            rect.push({
                x: - (d / 2) / Math.sqrt(1 + Math.pow(m2, 2)) + to.x,
                y: - (m2 * (d / 2)) / Math.sqrt(1 + Math.pow(m2, 2)) + to.y
            });

            rect.push({
                x: (d / 2) / Math.sqrt(1 + Math.pow(m2, 2)) + to.x,
                y: (m2 * (d / 2)) / Math.sqrt(1 + Math.pow(m2, 2)) + to.y
            });
        }

        return rect;
    }

    renderLine(from, to) {
        let path = new Path2D();
        let rect = this.calculateRectCoords(from, to);

        rect.forEach((dot, index) => {
            if (!index) {
                path.moveTo(dot.x, dot.y);
            } else {
                path.lineTo(dot.x, dot.y);
            }
        });
        path.lineTo(rect[0].x, rect[0].y);

        this.context.fillStyle = '#330000';

        path.closePath();

        if (this.interact.interact(from, to, this.context, path)) {
            this.additionalDrawings.push({x: from.x, y: from.y});
            this.additionalDrawings.push({x: to.x, y: to.y});
        }
        this.context.fill(path);
    }

    renderLayout(layout) {
        this.context.save();
        layout.dots.forEach((to, index) => {
            this.interact.interact(false, to);
            if (!index && this.interact.interact(false, to)) {
                this.additionalDrawings.push({x: to.x, y: to.y});
            } else if (index) {
                let from = layout.dots[index - 1];
                this.renderLine(from, to);
            }
        });
        this.context.restore();
    }

    renderAdditionalDrawings() {
        this.additionalDrawings.forEach((additionalDrawing) => {
            this.context.save();
            this.context.beginPath();

            this.context.arc(additionalDrawing.x, additionalDrawing.y, 5, 0, Math.PI * 2);

            this.context.strokeStyle = '#330000';
            this.context.lineWidth = 1;
            this.context.lineJoin = 'miter';
            this.context.stroke();
            this.context.restore();
        });
    }
}
