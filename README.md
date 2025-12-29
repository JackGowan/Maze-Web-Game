# The Maze - Interactive Adventure Game

A choose-your-own-adventure maze game built with Node.js and Express.

## Description

Navigate through a mysterious dungeon maze filled with choices, challenges, and multiple endings. Your decisions determine your path through this interactive adventure.

## Installation

1. Make sure you have Node.js installed (version 14 or higher)
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Running the Application

### Production Mode

```bash
npm start
```

### Development Mode (with auto-reload)

```bash
npm run dev
```

The application will start on `http://localhost:3000`

## How to Play

1. Open your browser and go to `http://localhost:3000`
2. **Choose your language**: Click "English" or "繁體中文" in the top-right corner
3. Read the story and make choices by clicking on the available options
4. Each choice leads to a different path through the maze
5. Try to find your way out - there are multiple endings!

## Language Support

The game is available in:
- **English**
- **繁體中文 (Traditional Chinese)**

Switch languages anytime using the toggle button in the top-right corner. See [LANGUAGE_SUPPORT.md](LANGUAGE_SUPPORT.md) for details.

## Deploy to the Web

Want to share your game with others? Deploy it for free to Render!

See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step instructions.

## Project Structure

```
Maze_Web/
├── server.js           # Express server and route definitions
├── package.json        # Project dependencies
├── views/              # EJS template files (game pages)
├── public/             # Static assets
│   ├── css/           # Stylesheets
│   └── images/        # Game images
└── README.md          # This file
```

## Routes

- `/` - Start of the maze
- `/maze/*` - Various maze locations
- `/maze/complete` - Victory ending
- `/maze/give-up` - Give up ending
- `/maze/credits` - Game credits

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **Express Session** - Session management for language preferences
- **EJS** - Templating engine
- **CSS** - Styling

## Author

Jack Gowan

## License

ISC
