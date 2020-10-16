export class Entity {
    constructor(x, y, canvas) {
        this.setX(x);
        this.setY(y);
    }

    setX(x) {
        this.x = x;
    }

    getX() {
        return this.x;
    }

    setY(y) {
        this.y = y;
    }

    getY() {
        return this.y;
    }
}
