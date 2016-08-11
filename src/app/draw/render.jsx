import Layouts from './layouts';

let canvas;
let context;
let size;
export default class Render {
    static init() {
        canvas = document.getElementById('paint-area');
        context = canvas.getContext('2d');
        size = {
            x: 320,
            y: 200
        };
    }

    static render() {
        this.clean();

        this.drawLayouts();
    }

    static clean() {
        context.fillStyle = '#ffffff';
        context.fillRect( 0, 0, size.x, size.y );
    }

    static drawLayouts() {
        var layouts = Layouts.getLayouts(), i;
        for (i = 0; i < layouts.length; i++) {
            if (layouts[i].dots.length > 1 && layouts[i].visibility) {
                this.drawLayout(layouts[i]);
            }
        }
    }

    static drawLayout(layout) {
        var i;

        context.save();
        context.beginPath();
        for (i = 0; i < layout.dots.length; i++) {
            if (i == 0) {
                context.moveTo(layout.dots[i].x, layout.dots[i].y);
            } else {
                context.lineTo(layout.dots[i].x, layout.dots[i].y);
            }
            if (layout.dots[i].highlight && !layout.locked && Layouts.getCurrentLayout() == layout) {
                this.drawHighlight(layout.dots[i].x, layout.dots[i].y);
            }
        }
        if (layout.endless && layout.dots.length > 2) {
            context.lineTo(layout.dots[0].x, layout.dots[0].y);
        }
        context.strokeStyle = '#330000';
        context.lineWidth = 3;
        context.lineJoin = 'miter';
        context.stroke();
        context.restore();
    }

    static drawHighlight(x, y) {
        context.arc(x, y, 5, 0, Math.PI * 2);
        context.strokeStyle = '#330000';
        context.lineWidth = 1;
        context.stroke();
        context.moveTo(x, y);
    }
}
