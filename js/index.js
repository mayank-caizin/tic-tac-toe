document.addEventListener("DOMContentLoaded", () => {
    console.log("working");
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    function drawBoard() {
        ctx.strokeStyle = 'rgb(240, 90, 40';
        ctx.fillStyle = '#14bdac';
        ctx.lineWidth = 0;
        ctx.beginPath();
        ctx.rect(0, 0, 601, 300);
        ctx.fill();
    }
    drawBoard();
});
//# sourceMappingURL=index.js.map