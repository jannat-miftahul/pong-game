// draw.js - All rendering functions

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

function drawNet() {
    ctx.strokeStyle = "#fff4";
    ctx.beginPath();
    for (let i = 0; i < canvas.height; i += 30) {
        ctx.moveTo(canvas.width / 2, i);
        ctx.lineTo(canvas.width / 2, i + 20);
    }
    ctx.stroke();
}

function drawScore() {
    ctx.fillStyle = "#fff";
    ctx.font = "40px Arial";
    ctx.textAlign = "center";

    // Player score (left side)
    ctx.fillText(playerScore, canvas.width / 4, 60);

    // Computer score (right side)
    ctx.fillText(aiScore, (canvas.width * 3) / 4, 60);

    // Score labels
    ctx.font = "16px Arial";
    ctx.fillText("PLAYER", canvas.width / 4, 85);
    ctx.fillText("COMPUTER", (canvas.width * 3) / 4, 85);

    // Game status
    ctx.font = "20px Arial";
    ctx.fillText(
        `First to ${winningScore} wins!`,
        canvas.width / 2,
        canvas.height - 30
    );

    // Leaderboard stats (top right corner)
    ctx.font = "14px Arial";
    ctx.textAlign = "right";
    ctx.fillStyle = "#aaa";
    ctx.fillText(`Games: ${gamesPlayed}`, canvas.width - 10, 20);
    ctx.fillText(`Player Wins: ${playerWins}`, canvas.width - 10, 40);
    ctx.fillText(`Computer Wins: ${aiWins}`, canvas.width - 10, 60);
}

function drawLeaderboard() {
    // Leaderboard background
    ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
    ctx.fillRect(canvas.width / 2 - 200, 100, 400, 300);

    // Leaderboard border
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.strokeRect(canvas.width / 2 - 200, 100, 400, 300);

    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";

    // Title
    ctx.font = "24px Arial";
    ctx.fillText("🏆 LEADERBOARD 🏆", canvas.width / 2, 130);

    // Stats
    ctx.font = "18px Arial";
    let y = 160;
    ctx.fillText(`Games Played: ${gamesPlayed}`, canvas.width / 2, y);

    y += 30;
    ctx.fillText(
        `Player Wins: ${playerWins} (${
            gamesPlayed ? Math.round((playerWins / gamesPlayed) * 100) : 0
        }%)`,
        canvas.width / 2,
        y
    );

    y += 25;
    ctx.fillText(
        `Computer Wins: ${aiWins} (${
            gamesPlayed ? Math.round((aiWins / gamesPlayed) * 100) : 0
        }%)`,
        canvas.width / 2,
        y
    );

    y += 30;
    ctx.fillText(
        `Total Player Points: ${totalPlayerPoints}`,
        canvas.width / 2,
        y
    );

    y += 25;
    ctx.fillText(
        `Total Computer Points: ${totalAiPoints}`,
        canvas.width / 2,
        y
    );

    if (gamesPlayed > 0) {
        y += 30;
        ctx.fillText(`Avg Points per Game:`, canvas.width / 2, y);
        y += 20;
        ctx.font = "16px Arial";
        ctx.fillText(
            `Player: ${(totalPlayerPoints / gamesPlayed).toFixed(
                1
            )} | Computer: ${(totalAiPoints / gamesPlayed).toFixed(1)}`,
            canvas.width / 2,
            y
        );
    }

    // Instructions
    ctx.font = "14px Arial";
    ctx.fillStyle = "#aaa";
    y += 40;
    ctx.fillText(
        "Press 'L' to toggle leaderboard | 'R' to reset stats",
        canvas.width / 2,
        y
    );
}

function drawGameOver() {
    // Semi-transparent overlay
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Winner announcement
    ctx.fillStyle = "#fff";
    ctx.font = "48px Arial";
    ctx.textAlign = "center";
    ctx.fillText(`${winner} WINS!`, canvas.width / 2, canvas.height / 2 - 80);

    // Final score
    ctx.font = "24px Arial";
    ctx.fillText(
        `Final Score: ${playerScore} - ${aiScore}`,
        canvas.width / 2,
        canvas.height / 2 - 40
    );

    // Game stats
    ctx.font = "18px Arial";
    ctx.fillStyle = "#aaa";
    ctx.fillText(
        `Game #${gamesPlayed}`,
        canvas.width / 2,
        canvas.height / 2 - 10
    );

    // Overall record
    ctx.fillStyle = "#fff";
    ctx.font = "20px Arial";
    ctx.fillText(
        `Overall Record: Player ${playerWins} - ${aiWins} Computer`,
        canvas.width / 2,
        canvas.height / 2 + 20
    );

    // Restart instruction
    ctx.font = "18px Arial";
    ctx.fillStyle = "#aaa";
    ctx.fillText(
        "Press SPACE to play again | L for leaderboard",
        canvas.width / 2,
        canvas.height / 2 + 60
    );
}
