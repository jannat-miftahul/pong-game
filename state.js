// state.js - All variables, constants, and reset functions

const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

// Game objects
const paddleWidth = 15;
const paddleHeight = 100;
const ballRadius = 10;
const playerX = 20;
const aiX = canvas.width - paddleWidth - 20;

// Speed settings - adjust these for different difficulty levels
const BALL_BASE_SPEED_X = 8; // Base horizontal speed
const BALL_BASE_SPEED_Y = 6; // Base vertical speed
const AI_PADDLE_SPEED = 7; // AI paddle movement speed
const SPEED_INCREASE = 0.1; // Speed increase per point scored

let playerY = (canvas.height - paddleHeight) / 2;
let aiY = (canvas.height - paddleHeight) / 2;

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = BALL_BASE_SPEED_X * (Math.random() < 0.5 ? 1 : -1);
let ballSpeedY = BALL_BASE_SPEED_Y * (Math.random() * 2 - 1);

// Score variables
let playerScore = 0;
let aiScore = 0;
const winningScore = 10;
let gameOver = false;
let winner = null;
let ballSpeedMultiplier = 1.0;

// Leaderboard tracking
let gamesPlayed = 0;
let playerWins = 0;
let aiWins = 0;
let totalPlayerPoints = 0;
let totalAiPoints = 0;
let showLeaderboard = false;

function resetBall() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = BALL_BASE_SPEED_X * (Math.random() < 0.5 ? 1 : -1);
    ballSpeedY = BALL_BASE_SPEED_Y * (Math.random() * 2 - 1);
}

function resetGame() {
    // Update leaderboard stats if game was completed
    if (gameOver && winner) {
        gamesPlayed++;
        totalPlayerPoints += playerScore;
        totalAiPoints += aiScore;

        if (winner === "PLAYER") {
            playerWins++;
        } else if (winner === "AI") {
            aiWins++;
        }
    }

    playerScore = 0;
    aiScore = 0;
    gameOver = false;
    winner = null;
    ballSpeedMultiplier = 1.0; // Reset speed multiplier on new game
    resetBall();
}

function resetLeaderboard() {
    gamesPlayed = 0;
    playerWins = 0;
    aiWins = 0;
    totalPlayerPoints = 0;
    totalAiPoints = 0;
}
