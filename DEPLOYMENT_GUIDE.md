# GitHub Pages Deployment Guide

Follow these steps to deploy your resume website to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `resume-website` (or any name you prefer)
3. Make sure it's **Public** (required for free GitHub Pages)
4. Don't initialize with README, .gitignore, or license

## Step 2: Upload Your Code

### Option A: Using GitHub Web Interface
1. Download all your files from this Replit project
2. In your GitHub repository, click "uploading an existing file"
3. Upload all files from your project

### Option B: Using Git Commands (if you have Git installed)
```bash
git init
git add .
git commit -m "Initial commit: Resume website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/resume-website.git
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The workflow file is already included and will automatically deploy your site

## Step 4: Access Your Website

After the GitHub Action completes (usually 2-5 minutes), your website will be available at:
```
https://YOUR_USERNAME.github.io/resume-website/
```

## Important Notes

- Replace `YOUR_USERNAME` with your actual GitHub username
- Your repository must be **public** for free GitHub Pages
- The first deployment may take a few minutes
- Any changes you push to the `main` branch will automatically redeploy the site

## Files Created for Deployment

- `.github/workflows/deploy.yml` - Automated deployment workflow
- `client/public/professional-photo.jpg` - Your professional photo
- Updated footer with beautiful gradient background

## Troubleshooting

If deployment fails:
1. Check the "Actions" tab in your GitHub repository
2. Make sure your repository is public
3. Ensure all files uploaded correctly
4. Contact me if you need help with specific errors

Your resume website is now ready to be shared with potential employers!