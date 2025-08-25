// game.js - Main game loop, update logic, and event handlers

function update() {
    if (gameOver) return;

    // Move ball with speed multiplier
    ballX += ballSpeedX * ballSpeedMultiplier;
    ballY += ballSpeedY * ballSpeedMultiplier;

    // Wall collision (top/bottom)
    if (ballY - ballRadius < 0) {
        ballY = ballRadius;
        ballSpeedY = -ballSpeedY;
    } else if (ballY + ballRadius > canvas.height) {
        ballY = canvas.height - ballRadius;
        ballSpeedY = -ballSpeedY;
    }

    // Paddle collision (left)
    if (
        ballX - ballRadius < playerX + paddleWidth &&
        ballY + ballRadius > playerY &&
        ballY - ballRadius < playerY + paddleHeight
    ) {
        ballX = playerX + paddleWidth + ballRadius;
        ballSpeedX = -ballSpeedX;
        // Add a bit of "spin"
        let collisionPoint = ballY - (playerY + paddleHeight / 2);
        ballSpeedY = collisionPoint * 0.2;
    }

    // Paddle collision (right)
    if (
        ballX + ballRadius > aiX &&
        ballY + ballRadius > aiY &&
        ballY - ballRadius < aiY + paddleHeight
    ) {
        ballX = aiX - ballRadius;
        ballSpeedX = -ballSpeedX;
        // Add a bit of "spin"
        let collisionPoint = ballY - (aiY + paddleHeight / 2);
        ballSpeedY = collisionPoint * 0.2;
    }

    // Out of bounds (left or right)
    if (ballX - ballRadius < 0) {
        aiScore++;
        ballSpeedMultiplier += SPEED_INCREASE; // Increase speed after each point
        if (aiScore >= winningScore) {
            gameOver = true;
            winner = "AI";
        }
        resetBall();
    } else if (ballX + ballRadius > canvas.width) {
        playerScore++;
        ballSpeedMultiplier += SPEED_INCREASE; // Increase speed after each point
        if (playerScore >= winningScore) {
            gameOver = true;
            winner = "PLAYER";
        }
        resetBall();
    }

    // AI movement - simple tracking
    let aiCenter = aiY + paddleHeight / 2;
    if (aiCenter < ballY - 20) {
        aiY += AI_PADDLE_SPEED;
    } else if (aiCenter > ballY + 20) {
        aiY -= AI_PADDLE_SPEED;
    }
    // Clamp AI paddle
    if (aiY < 0) aiY = 0;
    if (aiY + paddleHeight > canvas.height) aiY = canvas.height - paddleHeight;
}

function draw() {
    // Clear
    drawRect(0, 0, canvas.width, canvas.height, "#111");
    drawNet();
    drawScore();

    // Draw paddles
    drawRect(playerX, playerY, paddleWidth, paddleHeight, "#fff");
    drawRect(aiX, aiY, paddleWidth, paddleHeight, "#fff");

    // Draw ball
    drawCircle(ballX, ballY, ballRadius, "#0ff");

    // Draw game over screen if needed
    if (gameOver) {
        drawGameOver();
    }

    // Draw leaderboard if toggled
    if (showLeaderboard) {
        drawLeaderboard();
    }
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Player paddle follows mouse
canvas.addEventListener("mousemove", function (evt) {
    if (gameOver) return;

    let rect = canvas.getBoundingClientRect();
    let mouseY = evt.clientY - rect.top;
    playerY = mouseY - paddleHeight / 2;
    if (playerY < 0) playerY = 0;
    if (playerY + paddleHeight > canvas.height)
        playerY = canvas.height - paddleHeight;
});

// Keyboard controls for restart
document.addEventListener("keydown", function (evt) {
    if (evt.code === "Space" && gameOver) {
        evt.preventDefault();
        resetGame();
    }

    // Toggle leaderboard with 'L' key
    if (evt.code === "KeyL") {
        evt.preventDefault();
        showLeaderboard = !showLeaderboard;
    }

    // Reset leaderboard with 'R' key
    if (evt.code === "KeyR" && showLeaderboard) {
        evt.preventDefault();
        if (confirm("Are you sure you want to reset all leaderboard stats?")) {
            resetLeaderboard();
        }
    }
});

// Start the game
gameLoop();
