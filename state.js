// state.js - All variables, constants, and reset functions

const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

// Set up responsive canvas
function setupCanvas() {
    const container = canvas.parentElement;
    const maxWidth = Math.min(800, window.innerWidth - 40);
    const aspectRatio = 800 / 500; // Original game aspect ratio

    canvas.width = maxWidth;
    canvas.height = maxWidth / aspectRatio;

    // On very small screens, use a minimum height
    if (canvas.height < 300) {
        canvas.height = 300;
        canvas.width = canvas.height * aspectRatio;
    }
}

// Initialize canvas
setupCanvas();

// Game objects (proportional to canvas size)
const paddleWidth = canvas.width * 0.01875; // 15/800 of original
const paddleHeight = canvas.height * 0.2; // 100/500 of original
const ballRadius = Math.min(canvas.width, canvas.height) * 0.02; // 10/500 of original
const playerX = canvas.width * 0.025; // 20/800 of original
const aiX = canvas.width - paddleWidth - canvas.width * 0.025;

// Speed settings - proportional to canvas size
const BALL_BASE_SPEED_X = canvas.width * 0.01; // 8/800 of original
const BALL_BASE_SPEED_Y = canvas.height * 0.012; // 6/500 of original
const AI_PADDLE_SPEED = canvas.height * 0.014; // 7/500 of original
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
        } else if (winner === "COMPUTER") {
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

// Handle window resize
window.addEventListener("resize", () => {
    setupCanvas();
    // Adjust ball and paddle positions to new canvas size
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    playerY = (canvas.height - paddleHeight) / 2;
    aiY = (canvas.height - paddleHeight) / 2;
});
