import Layouts from './layouts';
import Render from './render';
import Paint from './paint';

export default class Draw {
    constructor(canvasId) {
        this.canvasId = canvasId;

        this.layouts = new Layouts();
        this.paint = new Paint(this.layouts);
        this.render = new Render(this.canvasId, this.layouts);

        this.lifeCycle();
    }

    lifeCycle() {
        this.render.update();
        window.requestAnimationFrame(this.lifeCycle.bind(this));
    }

    handleMouseDown() {
        this.paint.down();
    }

    handleMouseMove(event) {
        let x = event.clientX - event.currentTarget.offsetLeft;
        let y = event.clientY - event.currentTarget.offsetTop;
        this.paint.move(x, y);
    }

    handleMouseUp(event) {
        let x = event.clientX - event.currentTarget.offsetLeft;
        let y = event.clientY - event.currentTarget.offsetTop;
        this.paint.up(x, y);
    }
}
