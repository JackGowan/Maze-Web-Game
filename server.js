const express = require('express');
const session = require('express-session');
const path = require('path');
const translations = require('./translations');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Session middleware
app.use(session({
  secret: 'maze-game-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Middleware to set default language
app.use((req, res, next) => {
  if (!req.session.language) {
    req.session.language = 'en';
  }
  next();
});

// Serve static files (CSS, images, etc.)
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Language switching route
app.get('/set-language/:lang', (req, res) => {
  const { lang } = req.params;
  if (lang === 'en' || lang === 'zh') {
    req.session.language = lang;
  }
  const redirectUrl = req.get('Referrer') || '/';
  res.redirect(redirectUrl);
});

// Route mapping for all maze pages
const routes = {
  // Starting routes
  '/': 'a_maze-start',
  '/start': 'a_maze-start',
  '/start_0': 'a_maze-start_0',

  // Level 1 routes
  '/maze/left-light': 'a1_maze-left_light',
  '/maze/right-dark': 'a1_maze-right_dark',
  '/maze/wait': 'a1_maze-wait',
  '/maze/wait-0': 'a1_maze-wait_0',
  '/maze/wait-2': 'a1_maze-wait_2',

  // Level 2 routes
  '/maze/touch-statue': 'a2_maze-touch-statue',
  '/maze/ignore-statue': 'a2_maze-ignore-statue',
  '/maze/flee': 'a2_maze-flee',
  '/maze/light-wait': 'a2_maze-light-wait',
  '/maze/dark-trap-1-left': 'a2_maze-dark-trap-1-left',
  '/maze/dark-trap-1-center': 'a2_maze-dark-trap-1-center',
  '/maze/dark-trap-1-right': 'a2_maze-dark-trap-1-right',

  // Level 3 routes
  '/maze/prison': 'a3_maze-prison',
  '/maze/prison-blonde': 'a3_maze-prison-blonde',
  '/maze/after-chasm': 'a3_maze-after-chasm',
  '/maze/hide-stairs': 'a3_maze-hide-stairs',
  '/maze/dark-trap-2-iron': 'a3_maze-dark-trap-2-iron',
  '/maze/dark-trap-2-wood': 'a3_maze-dark-trap-2-wood',
  '/maze/dark-trap-2-open': 'a3_maze-dark-trap-2-open',

  // Level 4 routes
  '/maze/free-woman': 'a4_maze-free-woman',
  '/maze/flee-alone': 'a4_maze-flee-alone',
  '/maze/prison-blonde-4': 'a4_maze-prison-blonde',
  '/maze/dark-trap-3-stairs': 'a4_maze-dark-trap-3-stairs',
  '/maze/dark-trap-3-tunnel': 'a4_maze-dark-trap-3-tunnel',
  '/maze/dark-trap-3-water': 'a4_maze-dark-trap-3-water',
  '/maze/dark-trap-4-dwarf-1': 'a4_maze-dark-trap-4-dwarf_1',
  '/maze/dark-trap-4-dwarf-2': 'a4_maze-dark-trap-4-dwarf_2',
  '/maze/dark-trap-4-dwarf-3': 'a4_maze-dark-trap-4-dwarf_3',
  '/maze/dark-trap-5-roku-lair-1': 'a4_maze-dark-trap-5-roku_lair_1',
  '/maze/dark-trap-6-sanjyu-golden-room-0': 'a4_maze-dark-trap-6-sanjyu_golden_room_0',
  '/maze/dark-trap-6-sanjyu-golden-room-1': 'a4_maze-dark-trap-6-sanjyu_golden_room_1',
  '/maze/dark-trap-6-sanjyu-golden-room-2': 'a4_maze-dark-trap-6-sanjyu_golden_room_2',
  '/maze/dark-trap-7-hyaku-room-0': 'a4_maze-dark-trap-7-hyaku_room_0',
  '/maze/dark-trap-7-hyaku-room-1': 'a4_maze-dark-trap-7-hyaku_room_1',
  '/maze/dark-trap-7-hyaku-room-3': 'a4_maze-dark-trap-7-hyaku_room_3',
  '/maze/dark-trap-8-room-1': 'a4_maze-dark-trap-8-room-1',
  '/maze/dark-trap-8-room-2': 'a4_maze-dark-trap-8-room-2',

  // Level 5 routes - Alice path
  '/maze/alice-1': 'a5_maze-alice-1',
  '/maze/alice-2': 'a5_maze-alice-2',
  '/maze/alice-3': 'a5_maze-alice-3',
  '/maze/alice-4': 'a5_maze-alice-4',
  '/maze/alice-5': 'a5_maze-alice-5',
  '/maze/alice-6': 'a5_maze-alice-6',
  '/maze/alice-7': 'a5_maze-alice-7',
  '/maze/alice-8': 'a5_maze-alice-8',
  '/maze/alice-9': 'a5_maze-alice-9',
  '/maze/alice-10': 'a5_maze-alice-10',
  '/maze/alice-death-1': 'a5_maze-alice-death-1',
  '/maze/alice-death-2': 'a5_maze-alice-death-2',
  '/maze/alice-death-3': 'a5_maze-alice-death-3',
  '/maze/alice-death-4': 'a5_maze-alice-death-4',
  '/maze/alice-death-5': 'a5_maze-alice-death-5',
  '/maze/alice-death-6': 'a5_maze-alice-death-6',
  '/maze/alice-death-7': 'a5_maze-alice-death-7',

  // Level 5 routes - Ghost path
  '/maze/ghost-pre1': 'a5_maze-ghost-pre1',
  '/maze/ghost-pre2': 'a5_maze-ghost-pre2',
  '/maze/ghost-pre3': 'a5_maze-ghost-pre3',
  '/maze/ghost-pre4': 'a5_maze-ghost-pre4',
  '/maze/ghost-pre5': 'a5_maze-ghost-pre5',
  '/maze/ghost-1': 'a5_maze-ghost-1',
  '/maze/ghost-2': 'a5_maze-ghost-2',
  '/maze/ghost-3': 'a5_maze-ghost-3',
  '/maze/ghost3-ext1': 'a5_maze-ghost3_ext1',
  '/maze/ghost3-ext2': 'a5_maze-ghost3_ext2',
  '/maze/ghost3-ext3': 'a5_maze-ghost3_ext3',
  '/maze/ghost-4': 'a5_maze-ghost-4',
  '/maze/ghost-4-2': 'a5_maze-ghost-4_2',
  '/maze/ghost-5': 'a5_maze-ghost-5',
  '/maze/ghost-death-1': 'a5_maze-ghost-death-1',
  '/maze/ghost-death-2': 'a5_maze-ghost-death-2',
  '/maze/ghost-death-3': 'a5_maze-ghost-death-3',
  '/maze/ghost-death-4': 'a5_maze-ghost-death-4',
  '/maze/ghost-death-5': 'a5_maze-ghost-death-5',
  '/maze/ghost-death-6': 'a5_maze-ghost-death-6',
  '/maze/ghost-greg-end': 'a5_maze-ghost-greg-end',

  // Level 5 routes - Other paths
  '/maze/sword-explore': 'a5_maze-sword-explore',
  '/maze/sword-explore2': 'a5_maze-sword-explore2',
  '/maze/troll': 'a5_maze-troll',
  '/maze/troll-kill': 'a5_maze-troll-kill',
  '/maze/troll-nice': 'a5_maze-troll-nice',
  '/maze/orcs': 'a5_maze-orcs',
  '/maze/orcs-hide': 'a5_maze-orcs-hide',
  '/maze/orcs-kill': 'a5_maze-orcs-kill',

  // Level 6 routes - Heart room
  '/maze/heart-room-1': 'a6_maze-heart-room-1',
  '/maze/heart-room-1-explore': 'a6_maze-heart-room-1-explore',
  '/maze/heart-room-2': 'a6_maze-heart-room-2',
  '/maze/heart-room-2-explore': 'a6_maze-heart-room-2-explore',
  '/maze/heart-room-3': 'a6_maze-heart-room-3',
  '/maze/heart-room-3-explore': 'a6_maze-heart-room-3-explore',
  '/maze/heart-room-4': 'a6_maze-heart-room-4',
  '/maze/heart-room-4-explore': 'a6_maze-heart-room-4-explore',
  '/maze/heart-room-4-alt': 'a6_maze-heart-room-4-alt',

  // Ending routes
  '/maze/complete': 'z_complete-maze',
  '/maze/give-up': 'z_give-up',
  '/maze/credits': 'z_credits',
  '/maze/escape-no-secret': 'z_maze-escape-no-secret'
};

// Create routes dynamically
Object.keys(routes).forEach(route => {
  app.get(route, (req, res) => {
    const pageId = routes[route];
    const lang = req.session.language || 'en';
    const pageTranslations = translations[pageId] || {};

    res.render(pageId, {
      language: lang,
      translations: pageTranslations
    });
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1><p><a href="/">Return to Start</a></p>');
});

// Start server
app.listen(PORT, () => {
  console.log(`Maze Web App is running on http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
});
