# Deploying The Maze Game to Render

This guide will help you deploy your maze game to Render for free.

## Prerequisites

1. A GitHub account (free): https://github.com
2. A Render account (free): https://render.com
3. Git installed on your computer

## Step 1: Push Your Project to GitHub

### Option A: Using Git Command Line

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   ```

2. **Add all files to Git**:
   ```bash
   git add .
   ```

3. **Create your first commit**:
   ```bash
   git commit -m "Initial commit - Maze game ready for deployment"
   ```

4. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name it: `maze-web-game` (or any name you prefer)
   - Make it Public
   - Do NOT initialize with README (you already have one)
   - Click "Create repository"

5. **Connect your local repo to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/maze-web-game.git
   git branch -M main
   git push -u origin main
   ```
   (Replace YOUR-USERNAME with your actual GitHub username)

### Option B: Using GitHub Desktop

1. Download GitHub Desktop: https://desktop.github.com
2. Open GitHub Desktop and choose "Add Existing Repository"
3. Select your Maze_Web folder
4. Click "Publish repository" and follow the prompts

## Step 2: Deploy to Render

1. **Sign up/Login to Render**:
   - Go to https://render.com
   - Click "Get Started for Free"
   - Sign up with your GitHub account (recommended)

2. **Create a new Web Service**:
   - Click the "New +" button
   - Select "Web Service"
   - Click "Connect account" to connect GitHub if not already connected
   - Find and select your `maze-web-game` repository

3. **Configure the service**:
   - **Name**: `maze-web-game` (or any name you like)
   - **Region**: Choose the closest to you
   - **Branch**: `main`
   - **Runtime**: Node
   - **Build Command**: `npm install` (should be auto-detected)
   - **Start Command**: `npm start` (should be auto-detected)
   - **Instance Type**: Select "Free"

4. **Deploy**:
   - Click "Create Web Service"
   - Wait 2-5 minutes for the deployment to complete
   - You'll see build logs as it deploys

5. **Access your game**:
   - Once deployed, Render will give you a URL like:
     `https://maze-web-game.onrender.com`
   - Click the URL to play your game!

## Important Notes

### Free Tier Limitations
- Your app will "sleep" after 15 minutes of inactivity
- First visit after sleeping takes 30-60 seconds to wake up
- 750 hours/month of runtime (plenty for a personal game)

### Updating Your Game
Whenever you make changes:
1. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push
   ```
2. Render will automatically redeploy your app!

### Custom Domain (Optional)
- You can add a custom domain in Render settings
- Free tier supports custom domains with HTTPS

## Troubleshooting

### Build fails
- Check the build logs in Render dashboard
- Make sure all dependencies are in `package.json`
- Verify Node.js version compatibility

### App won't start
- Check runtime logs in Render dashboard
- Ensure `PORT` environment variable is used (already configured)

### Images not loading
- All files must be pushed to GitHub
- Check that `public/images/` folder is included
- Make sure `.gitignore` doesn't exclude image files

## Getting Help

- Render Documentation: https://render.com/docs
- Render Community: https://community.render.com
- Check build and runtime logs in Render dashboard

## Share Your Game!

Once deployed, share your game URL with friends:
`https://your-app-name.onrender.com`

Enjoy sharing your maze adventure with the world!
