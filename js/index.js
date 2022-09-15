document.addEventListener("DOMContentLoaded", () => {
    var _a;
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    const LINE_GAP = 3;
    const GAP = 15;
    const LINE_WIDTH = 6;
    let xwins = 0, owins = 0;
    let xturn = true;
    let winningList = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
        [2, 5, 8], [0, 4, 8], [6, 4, 2]];
    let currentBox = -1, boxX = 0, boxY = 0;
    let winner = "";
    let boxState = ["", "", "", "", "", "", "", "", ""];
    let turns = 0;
    function startGame() {
        xturn = true;
        currentBox = -1, boxX = 0, boxY = 0;
        winner = "";
        boxState = ["", "", "", "", "", "", "", "", ""];
        turns = 0;
        canvas.addEventListener('click', eventHandler);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBoard();
    }
    (_a = document.getElementById('restart')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', startGame);
    startGame();
    function eventHandler(e) {
        const target = e.currentTarget;
        let rect = target.getBoundingClientRect();
        let x = Math.round(e.clientX - rect.left);
        let y = Math.round(e.clientY - rect.top);
        setCurrentBox(x, y);
        if (currentBox !== -1 && boxState[currentBox] === "") {
            draw();
        }
    }
    function checkWinner() {
        for (let i = 0; i < 8; i++) {
            let condition = winningList[i];
            if (boxState[condition[0]] === boxState[condition[1]]
                && boxState[condition[1]] === boxState[condition[2]]) {
                winner = boxState[condition[0]];
                if (winner !== "")
                    break;
            }
        }
    }
    function setCurrentBox(x, y) {
        if ((x > 195 && x < 265) && (y > 15 && y < 85)) {
            currentBox = 0;
            boxX = 195;
            boxY = 15;
        }
        else if ((x > 265 && x < 335) && (y > 15 && y < 85)) {
            currentBox = 1;
            boxX = 265;
            boxY = 15;
        }
        else if ((x > 335 && x < 405) && (y > 15 && y < 85)) {
            currentBox = 2;
            boxX = 335;
            boxY = 15;
        }
        else if ((x > 195 && x < 265) && (y > 85 && y < 155)) {
            currentBox = 3;
            boxX = 195;
            boxY = 85;
        }
        else if ((x > 265 && x < 335) && (y > 85 && y < 155)) {
            currentBox = 4;
            boxX = 265;
            boxY = 85;
        }
        else if ((x > 335 && x < 405) && (y > 85 && y < 155)) {
            currentBox = 5;
            boxX = 335;
            boxY = 85;
        }
        else if ((x > 195 && x < 265) && (y > 155 && y < 225)) {
            currentBox = 6;
            boxX = 195;
            boxY = 155;
        }
        else if ((x > 265 && x < 335) && (y > 155 && y < 225)) {
            currentBox = 7;
            boxX = 265;
            boxY = 155;
        }
        else if ((x > 335 && x < 405) && (y > 155 && y < 225)) {
            currentBox = 8;
            boxX = 335;
            boxY = 155;
        }
        else {
            currentBox = -1;
            boxX = 0;
            boxY = 0;
        }
    }
    function draw() {
        turns++;
        if (xturn) {
            drawX(boxX, boxY, LINE_WIDTH, 70);
            boxState[currentBox] = "X";
        }
        else {
            drawO(boxX, boxY, LINE_WIDTH, 70);
            boxState[currentBox] = "O";
        }
        xturn = !xturn;
        document.getElementById('turn').innerHTML = (xturn) ? "X Turn" : "O Turn";
        checkWinner();
        if (winner !== "" || turns === 9) {
            canvas.removeEventListener('click', eventHandler);
            document.getElementById('turn').innerHTML = "Game Over";
            drawResult();
        }
    }
    function drawResult() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#14bdac';
        ctx.beginPath();
        ctx.rect(0, 0, 601, 240);
        ctx.fill();
        ctx.closePath();
        if (winner === "") {
            drawX(195, 55, LINE_WIDTH * 2, 100);
            drawO(295, 55, LINE_WIDTH * 2, 100);
            ctx.fillStyle = '#515857';
            ctx.font = "30px Poppins bold";
            ctx.fillText("DRAW!", 250, 200);
        }
        else if (winner === "X") {
            xwins++;
            document.getElementById('x-wins').innerHTML = xwins.toString();
            drawX(225, 30, LINE_WIDTH * 2, 150);
            ctx.fillStyle = '#515857';
            ctx.font = "30px Poppins bold";
            ctx.fillText("WINNER!", 235, 200);
        }
        else {
            owins++;
            document.getElementById('o-wins').innerHTML = owins.toString();
            drawO(225, 30, LINE_WIDTH * 2, 150);
            ctx.fillStyle = '#515857';
            ctx.font = "30px Poppins bold";
            ctx.fillText("WINNER!", 235, 200);
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
    function drawX(x, y, width, size) {
        ctx.save();
        x += size / 2;
        y += size / 2;
        ctx.translate(x, y);
        const GAP = width + LINE_GAP;
        const X_LENGTH = size - GAP * 2;
        ctx.fillStyle = 'rgb(84, 84, 84)';
        ctx.beginPath();
        ctx.rotate(-45 * Math.PI / 180);
        ctx.fillRect(-size / 2 + GAP, -width / 2, X_LENGTH, width);
        ctx.closePath();
        ctx.beginPath();
        ctx.rotate(90 * Math.PI / 180);
        ctx.fillRect(-size / 2 + GAP, -width / 2, X_LENGTH, width);
        ctx.closePath();
        ctx.restore();
    }
    function drawO(x, y, width, size) {
        x += size / 2;
        y += size / 2;
        const GAP = width + LINE_GAP;
        const LENGTH = size - GAP * 2 - 10;
        ctx.fillStyle = 'rgb(242, 235, 211)';
        ctx.beginPath();
        ctx.ellipse(x, y, LENGTH / 2, LENGTH / 2, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.fillStyle = '#14bdac';
        ctx.beginPath();
        ctx.ellipse(x, y, LENGTH / 2 - width, LENGTH / 2 - width, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
});
//# sourceMappingURL=index.js.map