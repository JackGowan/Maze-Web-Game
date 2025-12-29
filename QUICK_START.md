# Quick Start Guide

## Local Development

```bash
# Install dependencies
npm install

# Start the server
npm start

# Visit in browser
http://localhost:3000
```

## Deploy to Render (Quick Version)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/maze-web-game.git
   git push -u origin main
   ```

2. **Deploy on Render**:
   - Go to https://render.com
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Click "Create Web Service"
   - Wait for deployment (~2-5 minutes)

3. **Share your game**:
   - Get your URL: `https://your-app-name.onrender.com`
   - Share with friends!

For detailed instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

## Project Files

- `server.js` - Express server
- `views/` - Game pages (EJS templates)
- `public/css/` - Stylesheets
- `public/images/` - Game images
- `package.json` - Dependencies
- `render.yaml` - Render configuration

## Need Help?

- Full README: [README.md](README.md)
- Deployment Guide: [DEPLOYMENT.md](DEPLOYMENT.md)
