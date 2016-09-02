export default class Render {
    constructor(canvasId, Layouts, Paint, Interact) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.size = {
            x: 320,
            y: 200
        };
        this.layouts = Layouts;
        this.paint = Paint;
        this.interact = Interact;
    }

    update() {
        this.clean();

        this.interact.clean();

        this.renderLayouts();

        this.drawActives(this.interact.getActives());
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
            d = 5;

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

    renderLine(from, to, index) {
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

        this.interact.interact(from, to, index, this.context, path);

        this.context.fill(path);
    }

    renderLayout(layout) {
        this.context.save();
        if (layout.dots.length == 1) {
            this.drawDotCircle(layout.dots[0]);
        } else {
            layout.dots.forEach((to, index) => {
                if (!index) {
                    this.interact.interact(false, to, index);
                } else {
                    let from = layout.dots[index - 1];
                    this.renderLine(from, to, index);
                }
            });
        }
        this.context.restore();
    }

    drawActives(actives) {
        actives.forEach((active) => {
            this.drawDotCircle(active.dot);
        });
    }

    drawDotCircle(position) {
        this.context.save();
        this.context.beginPath();

        this.context.arc(position.x, position.y, 8, 0, Math.PI * 2);

        this.context.strokeStyle = '#330000';
        this.context.lineWidth = 1;
        this.context.lineJoin = 'miter';
        this.context.stroke();
        this.context.restore();
    }
}
