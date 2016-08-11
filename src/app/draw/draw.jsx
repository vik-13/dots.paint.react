import DrawLayouts from './layouts';
import Render from './render';
import Paint from './paint';


export default class Draw {
    constructor(canvasId) {
        this.canvasId = canvasId;

        this.drawLayouts = new DrawLayouts();
        this.paint = new Paint(this.drawLayouts);
        this.render = new Render(this.canvasId, this.drawLayouts);

        this.lifeCycle();
    }

    lifeCycle() {
        this.render.render();
        window.requestAnimationFrame(this.lifeCycle.bind(this));
    }

    handleMouseDown() {
        this.paint.down();
    }

    handleMouseMove(event) {
        let x = event.clientX - event.currentTarget.offsetLeft;
        let y = event.clientY - event.currentTarget.offsetTop;
        this.paint.update(x, y);
    }

    handleMouseUp(event) {
        let x = event.clientX - event.currentTarget.offsetLeft;
        let y = event.clientY - event.currentTarget.offsetTop;
        this.paint.up(x, y);
    }
}
