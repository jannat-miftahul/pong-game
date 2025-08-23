const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

const state = {};
initState(canvas);

setupInput(canvas, state, resetGame, resetLeaderboard);

function gameLoop() {
    updateGameState(canvas, state);
    // draw everything
    requestAnimationFrame(gameLoop);
}

gameLoop();
