export class Board {
    constructor(ctx) {
        this.ctx = ctx;
    }
    render() {
        this.ctx.strokeStyle = 'black';
        this.ctx.fillStyle = 'rgb(240, 90, 40';
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.rect(10, 10, 100, 100);
        this.ctx.stroke();
        this.ctx.fill();
    }
}
//# sourceMappingURL=board.js.map