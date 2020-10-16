import {Entity} from "./entity";
import {Global} from "./global";

export class Ship extends Entity {
    constructor(x, y, size) {
        super(x, y)
        this.setRadius(size / 2) ;
        this.setSize(size);
        this.setRotation(90);
        this.setRotationSpeed(360); // Turn speed in degrees per second
        this.setThrustAcc(3); // Acceleration of the ship in pixels per second, per second
        this.friction = 0.9;

        this.thrustMagnitude = {
            x: 0,
            y: 0
        }

        // Convert angle to radians
        this.angle = this.getRotation() / 180 * Math.PI;

        this.ctx = Global.getCanvas();
    }

    draw() {
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = this.getSize() / 20;
        this.ctx.beginPath();
        this.ctx.moveTo(
            this.getX() + this.getRadius() * (4/3 * Math.cos(this.getAngle())),
            this.getY() - this.getRadius() * (4/3 * Math.sin(this.getAngle()))
        );
        this.ctx.lineTo(
            this.getX() - this.getRadius() * (2/3 * Math.cos(this.getAngle()) + Math.sin(this.getAngle())),
            this.getY() + this.getRadius() * (2/3 * Math.sin(this.getAngle()) - Math.cos(this.getAngle()))
        );
        this.ctx.lineTo(
            this.getX() - this.getRadius() * (2/3 * Math.cos(this.getAngle()) - Math.sin(this.getAngle())),
            this.getY() + this.getRadius() * (2/3 * Math.sin(this.getAngle()) + Math.cos(this.getAngle()))
        );
        this.ctx.closePath();
        this.ctx.stroke();
    }

    rotate() {
        if(Global.getKeys()["ArrowLeft"]) this.setRotation(this.getRotation() + (this.getRotationSpeed() / Global.getFPS()));
        if(Global.getKeys()["ArrowRight"]) this.setRotation(this.getRotation() - (this.getRotationSpeed() / Global.getFPS()));
    }

    move() {
        if(Global.getKeys()[" "]) {
            let thrust = {
                x: this.getThrustMagnitude().x += this.getThrustAcc() * Math.cos(this.getAngle()) / Global.FPS,
                y: this.getThrustMagnitude().y -= this.getThrustAcc() * Math.sin(this.getAngle()) / Global.FPS
            }
            this.setThrustMagnitude(thrust);
        } else {
            let thrust = {
                x: this.getThrustMagnitude().x -= this.friction * this.getThrustMagnitude().x / Global.FPS,
                y: this.getThrustMagnitude().y -= this.friction * this.getThrustMagnitude().y / Global.FPS,
            }
            this.setThrustMagnitude(thrust);
        }
        this.setX(this.getX() + this.getThrustMagnitude().x);
        this.setY(this.getY() + this.getThrustMagnitude().y);
    }

    isHitEdge() {
        if(this.getX() <= 0 - this.getRadius()) {
            this.setX(Global.canvasWidth + this.getRadius());
        } else if(this.getX() >= Global.canvasWidth + this.getRadius()) {
            this.setX(0 - this.getRadius());
        }
        if(this.getY() <= 0 - this.getRadius()) {
            this.setY(Global.canvasHeight + this.getRadius());
        } else if(this.getY() >= Global.canvasHeight + this.getRadius()) {
            this.setY(0 - this.getRadius());
        }

    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getCenter() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x - 1, this.y -1, 2, 2);
    }

    getRotation() {
        return this.rotation;
    }

    setRotation(rotation) {
        this.rotation = rotation;
        this.setAngle();
    }

    setAngle() {
        this.angle = this.getRotation() / 180 * Math.PI;
    }

    getAngle() {
        return this.angle;
    }

    getRotationSpeed() {
        return this.rotationSpeed;
    }

    setRotationSpeed(speed) {
        this.rotationSpeed = speed;
    }

    getThrustAcc() {
        return this.thrustAcc;
    }

    setThrustAcc(thrustAcc) {
        this.thrustAcc = thrustAcc;
    }

    getThrustMagnitude() {
        return this.thrustMagnitude;
    }

    setThrustMagnitude(thrustMagnitude) {
        this.thrustMagnitude = thrustMagnitude;
    }

    getSize() {
        return this.size;
    }

    setSize(size) {
        this.size = size;
    }
}
