document.addEventListener("DOMContentLoaded", () => {
    console.log("working");
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    const LINE_GAP = 3;
    const GAP = 15;
    const LINE_WIDTH = 6;
    let xturn = true;
    let winningList = [];
    let currentBox = 0, boxX = 0, boxY = 0;
    let gameRun = true;
    let winner = "";
    let xpos = [];
    let ypos = [];
    canvas.addEventListener('click', (e) => {
        const target = e.currentTarget;
        let rect = target.getBoundingClientRect();
        let x = Math.round(e.clientX - rect.left);
        let y = Math.round(e.clientY - rect.top);
        console.log(x + ' ' + y);
        setCurrentBox(x, y);
        console.log(currentBox);
    });
    function setCurrentBox(x, y) {
        if ((x > 195 && x < 265) && (y > 15 && y < 85)) {
            currentBox = 1;
            boxX = 195;
            boxY = 15;
        }
        else if ((x > 265 && x < 335) && (y > 15 && y < 85)) {
            currentBox = 2;
            boxX = 265;
            boxY = 15;
        }
        else if ((x > 335 && x < 405) && (y > 15 && y < 85)) {
            currentBox = 3;
            boxX = 335;
            boxY = 15;
        }
        else if ((x > 195 && x < 265) && (y > 85 && y < 155)) {
            currentBox = 4;
            boxX = 195;
            boxY = 85;
        }
        else if ((x > 265 && x < 335) && (y > 85 && y < 155)) {
            currentBox = 5;
            boxX = 265;
            boxY = 85;
        }
        else if ((x > 335 && x < 405) && (y > 85 && y < 155)) {
            currentBox = 6;
            boxX = 335;
            boxY = 85;
        }
        else if ((x > 195 && x < 265) && (y > 155 && y < 225)) {
            currentBox = 7;
            boxX = 195;
            boxY = 155;
        }
        else if ((x > 265 && x < 335) && (y > 155 && y < 225)) {
            currentBox = 8;
            boxX = 195;
            boxY = 155;
        }
        else if ((x > 335 && x < 405) && (y > 155 && y < 225)) {
            currentBox = 9;
            boxX = 335;
            boxY = 155;
        }
        else {
            currentBox = 0;
            boxX = 0;
            boxY = 0;
        }
    }
    function drawBoard() {
        ctx.fillStyle = '#14bdac';
        ctx.beginPath();
        ctx.rect(0, 0, 601, 240);
        ctx.fill();
        ctx.closePath();
        ctx.fillStyle = '#0da192';
        ctx.beginPath();
        ctx.fillRect(265 - LINE_GAP, 0 + GAP, LINE_WIDTH, 210);
        ctx.closePath();
        ctx.beginPath();
        ctx.fillRect(335 - LINE_GAP, 0 + GAP, LINE_WIDTH, 210);
        ctx.closePath();
        ctx.beginPath();
        ctx.fillRect(195, 85 - LINE_GAP, 210, LINE_WIDTH);
        ctx.closePath();
        ctx.beginPath();
        ctx.fillRect(195, 155 - LINE_GAP, 210, LINE_WIDTH);
        ctx.closePath();
    }
    function drawX(x, y) {
        ctx.save();
        x += 35;
        y += 35;
        ctx.translate(x, y);
        const GAP = 5 + LINE_GAP;
        const p = Math.sin(Math.PI / 4) * (LINE_WIDTH / 2);
        const X_LENGTH = 70 - GAP * 2;
        ctx.fillStyle = 'rgb(84, 84, 84)';
        ctx.beginPath();
        ctx.rotate(-45 * Math.PI / 180);
        ctx.fillRect(-35 + GAP, -LINE_WIDTH / 2, X_LENGTH, LINE_WIDTH);
        ctx.closePath();
        ctx.beginPath();
        ctx.rotate(90 * Math.PI / 180);
        ctx.fillRect(-35 + GAP, -LINE_WIDTH / 2, X_LENGTH, LINE_WIDTH);
        ctx.closePath();
        ctx.restore();
    }
    function drawO(x, y) {
        x += 35;
        y += 35;
        const GAP = 5 + LINE_GAP;
        const LENGTH = 70 - GAP * 2 - 10;
        ctx.fillStyle = 'rgb(242, 235, 211)';
        ctx.beginPath();
        ctx.ellipse(x, y, LENGTH / 2, LENGTH / 2, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.fillStyle = '#14bdac';
        ctx.beginPath();
        ctx.ellipse(x, y, LENGTH / 2 - LINE_WIDTH, LENGTH / 2 - LINE_WIDTH, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
    drawBoard();
});
//# sourceMappingURL=index.js.map