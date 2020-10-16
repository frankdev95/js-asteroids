export class Global {
    static canvas
    static canvasWidth
    static canvasHeight;
    static keys;
    static FPS;

    constructor(canvas, keys, FPS, canvasWidth, canvasHeight) {
        this.setCanvas(canvas);
        this.setCanvasWidth(canvasWidth);
        this.setCanvasHeight(canvasHeight);
        this.setKeys(keys);
        this.setFPS(FPS);

    }

    setCanvas(canvas) {
        Global.canvas = canvas;
    }

    static getCanvas() {
        return Global.canvas;
    }

    setCanvasWidth(canvasWidth) {
        Global.canvasWidth = canvasWidth;
    }

    static getCanvasWidth() {
        return Global.canvasWidth;
    }

    setCanvasHeight(canvasHeight) {
        Global.canvasHeight = canvasHeight;
    }

    static getCanvasHeight() {
        return Global.canvasHeight;
    }

    setKeys(keys) {
        Global.keys = keys;
    }

    static getKeys() {
        return Global.keys;
    }

    setFPS(FPS) {
        Global.FPS = FPS;
    }

    static getFPS() {
        return this.FPS;
    }
}
