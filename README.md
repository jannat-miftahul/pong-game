# Pong Game

A classic Pong game built with HTML5 Canvas, CSS, and JavaScript. Features mouse-controlled player paddle, AI opponent, progressive difficulty, and comprehensive leaderboard tracking.

## 📋 Table of Contents

-   [Features](#-features)
-   [Getting Started](#-getting-started)
-   [How to Play](#-how-to-play)
-   [Project Structure](#-project-structure)
-   [Configuration](#️-configuration)
-   [Customization](#-customization)
-   [Development](#-development)
-   [Game Features](#-game-features)
-   [Game Mechanics](#-game-mechanics)
-   [Leaderboard System](#-leaderboard-system)

## 🎮 Features

-   **Classic Pong Gameplay** - Authentic retro gaming experience
-   **Mouse Controls** - Smooth player paddle control with mouse movement
-   **AI Opponent** - Intelligent computer-controlled paddle
-   **Progressive Difficulty** - Ball speed increases with each point scored
-   **Comprehensive Scoring** - Real-time score display and game completion detection
-   **Advanced Leaderboard** - Track games played, win/loss records, and statistics
-   **Visual Polish** - Clean retro design with smooth animations
-   **Responsive Design** - Works on different screen sizes

## 🚀 Getting Started

### Prerequisites

-   Modern web browser (Chrome, Firefox, Safari, Edge)
-   No additional installations required

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start playing immediately!

```bash
git clone https://github.com/your-username/pong-game.git
cd pong-game
# Open index.html in your browser
```

## 🎯 How to Play

### Controls

-   **Mouse Movement** - Move your mouse up and down to control the left paddle
-   **Spacebar** - Restart game after game over
-   **L Key** - Toggle leaderboard display
-   **R Key** - Reset leaderboard statistics (when leaderboard is visible)

### Objective

-   First player to reach **10 points** wins
-   Score points by getting the ball past your opponent's paddle
-   Ball speed increases after each point for added challenge

## 📁 Project Structure

```
pong-game/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── state.js           # Game variables
├── draw.js            # Drawing functions
├── game.js            # Game logic
└── README.md          # Documentation
```

## ⚙️ Configuration

### Speed Settings

Adjust game difficulty by modifying constants in `state.js`:

```javascript
const BALL_BASE_SPEED_X = 8; // Horizontal ball speed
const BALL_BASE_SPEED_Y = 6; // Vertical ball speed
const AI_PADDLE_SPEED = 7; // AI paddle movement speed
const SPEED_INCREASE = 0.1; // Speed increase per point
```

### Game Rules

```javascript
const winningScore = 10; // Points needed to win
const paddleHeight = 100; // Paddle size
const ballRadius = 10; // Ball size
```

## 🎨 Customization

### Colors

Modify colors in `styles.css`:

-   Background: `#222`, Canvas: `#111`, Paddles: `#fff`, Ball: `#0ff`

### Canvas Size

Adjust dimensions in `index.html`:

```html
<canvas id="pong" width="800" height="500"></canvas>
```

## 🔧 Development

### Code Organization

-   **state.js** - Variables and constants
-   **draw.js** - Rendering functions
-   **game.js** - Game logic and input handling

## 📊 Game Features

-   **Collision Detection** - Ball bounces off paddles and walls
-   **Physics System** - Smooth ball movement with progressive speed
-   **AI Opponent** - Computer-controlled paddle with balanced difficulty
-   **Scoring System** - Real-time scoring with win condition (10 points)

## 🎲 Game Mechanics

-   **Mouse Control** - Move paddle with mouse
-   **Ball Physics** - Velocity-based movement with spin effects
-   **Progressive Difficulty** - Speed increases with each point
-   **Game Reset** - Clean restart functionality

## 📈 Leaderboard System

-   **Games Played** - Total completed games
-   **Win/Loss Record** - Player and AI win counters
-   **Win Percentages** - Calculated win rates
-   **Total Points** - Cumulative points across all games
-   **Persistent Tracking** - Statistics survive multiple games
-   **Reset Functionality** - Clear all statistics with confirmation

---

**Enjoy playing Pong!**

_Built with ❤️ using vanilla JavaScript, HTML5 Canvas, and CSS_
