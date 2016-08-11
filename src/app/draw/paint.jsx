import Layouts from './layouts';

let highlights = [];
let isMoving = false;

export default class Paint {

    static update(x, y) {
        var layout = Layouts.getCurrentLayout(),
            i, r;

        if (!isMoving) {
            highlights.length = 0;

            for (i = 0; i < layout.dots.length; i++) {
                r = Math.sqrt(Math.pow(layout.dots[i].x - x, 2) + Math.pow(layout.dots[i].y - y, 2));
                if (r <= 5) {
                    layout.dots[i].highlight = true;
                    highlights.push(layout.dots[i]);
                } else {
                    layout.dots[i].highlight = false;
                }
            }
        } else {
            for (i = 0; i < highlights.length; i++) {
                highlights[i].x = x;
                highlights[i].y = y;
            }
        }
    }

    static down() {
        if (highlights.length >= 1) {
            isMoving = true;
        }
    }

    static up(x, y) {
        if (isMoving) {
            isMoving = false;
        } else {
            Layouts.getCurrentLayout().push(x, y);
        }
    }
}
