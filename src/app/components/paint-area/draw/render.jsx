export default class Render {
    constructor(canvasId, drawLayouts) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.size = {
            x: 320,
            y: 200
        };
        this.drawLayouts = drawLayouts;
    }

    render() {
        this.clean();

        this.renderLayouts();
    }

    clean() {
        this.context.fillStyle = '#ffffff';
        this.context.fillRect( 0, 0, this.size.x, this.size.y );
    }

    renderLayouts() {
        var layouts = this.drawLayouts.getLayouts(), i;
        for (i = 0; i < layouts.length; i++) {
            if (layouts[i].dots.length >= 1 && layouts[i].visibility) {
                this.renderLayout(layouts[i]);
            }
        }
    }

    renderLayout(layout) {
        var i;

        this.context.save();
        this.context.beginPath();
        for (i = 0; i < layout.dots.length; i++) {
            if (i == 0) {
                this.context.moveTo(layout.dots[i].x, layout.dots[i].y);
            } else {
                this.context.lineTo(layout.dots[i].x, layout.dots[i].y);
            }
            if (layout.dots[i].highlight && !layout.locked && this.drawLayouts.getCurrentLayout() == layout) {
                this.renderHighlight(layout.dots[i].x, layout.dots[i].y);
            }
        }
        if (layout.endless && layout.dots.length > 2) {
            this.context.lineTo(layout.dots[0].x, layout.dots[0].y);
        }
        this.context.strokeStyle = '#330000';
        this.context.lineWidth = 3;
        this.context.lineJoin = 'miter';
        this.context.stroke();
        this.context.restore();
    }

    renderHighlight(x, y) {
        this.context.arc(x, y, 5, 0, Math.PI * 2);
        this.context.strokeStyle = '#330000';
        this.context.lineWidth = 1;
        this.context.stroke();
        this.context.moveTo(x, y);
    }
}
