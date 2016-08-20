export default class Render {
    constructor(canvasId, Layouts) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.size = {
            x: 320,
            y: 200
        };
        this.additionalDrawings = [];
        this.layouts = Layouts;
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

    renderLayout(layout) {
        this.context.save();
        this.context.beginPath();
        layout.dots.forEach((dot, index) => {
            if (!index) {
                this.context.moveTo(dot.x, dot.y);
            } else {
                this.context.lineTo(dot.x, dot.y);
            }
            if (dot.highlight && !layout.locked && this.layouts.getCurrentLayout() == layout) {
                this.additionalDrawings.push({x: dot.x, y: dot.y});
            }
        });
        if (layout.endless && layout.dots.length > 2) {
            this.context.lineTo(layout.dots[0].x, layout.dots[0].y);
        }
        this.context.strokeStyle = '#330000';
        this.context.lineWidth = 3;
        this.context.lineJoin = 'miter';
        this.context.stroke();
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
