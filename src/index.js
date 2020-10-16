import "./sass/main.scss";
import {Ship} from "./ship";
import {Global} from "./global";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const FPS = 60;

let keys = {}

new Global(ctx, keys, FPS, canvas.width, canvas.height);

let ship = new Ship(canvas.width / 2, canvas.height / 2, 30);

document.addEventListener("keydown", (e) => {
    if(e.key === "ArrowLeft") keys[e.key] = true;
    if(e.key === "ArrowRight") keys[e.key] = true;
    if(e.key === " ") keys[e.key] = true;
});
document.addEventListener("keyup", (e) => {
    if(e.key === "ArrowLeft") keys[e.key] = false;
    if(e.key === "ArrowRight") keys[e.key] = false;
    if(e.key === " ") keys[e.key] = false;
});

const renderSpace = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const update = () => {
    //DRAW SPACE
    renderSpace();
    //DRAW SHIP
    ship.draw();
    ship.move();
    //ROTATE SHIP
    ship.rotate();
    ship.isHitEdge();
    //MOVE SHIP

}

setInterval(update, 1000 / FPS);
