import Layouts from './layouts';
import Render from './render';
import Paint from './paint';


export default class Draw {
    static init() {
        Layouts.add();

        Render.init();

        this.lifeCycle();
    }

    static lifeCycle() {
        Render.render();
        window.requestAnimationFrame(this.lifeCycle.bind(this));
    }

    static handleMouseDown() {
        Paint.down();
    }

    static handleMouseMove(event) {
        let x = event.clientX - event.currentTarget.offsetLeft;
        let y = event.clientY - event.currentTarget.offsetTop;
        Paint.update(x, y);
    }

    static handleMouseUp(event) {
        let x = event.clientX - event.currentTarget.offsetLeft;
        let y = event.clientY - event.currentTarget.offsetTop;
        Paint.up(x, y);
    }
}
