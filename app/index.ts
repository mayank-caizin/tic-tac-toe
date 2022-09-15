// import { Board } from './board';

document.addEventListener("DOMContentLoaded", () => {
    console.log("working");
    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas');
    let ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext('2d');

    // let board = new Board(ctx);
    // board.render();

    function drawBoard() {
        ctx.strokeStyle = 'rgb(240, 90, 40';
        ctx.fillStyle = '#14bdac';
        ctx.lineWidth = 0;
        ctx.beginPath();
        ctx.rect(0, 0, 601, 300);
        // ctx.stroke();
        ctx.fill();
    }

    drawBoard();
});