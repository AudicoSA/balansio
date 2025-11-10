# Deploy BALANSIO with Git + Vercel

This is the professional way to deploy and continuously develop BALANSIO. Every time you push code to GitHub, Vercel automatically deploys it!

---

## Step 1: Create GitHub Repository (5 minutes)

### Option A: Using GitHub Website (Easiest)

1. **Go to GitHub**: https://github.com/new
2. **Sign in** (or create account if you don't have one)
3. **Create new repository**:
   - Repository name: `balansio`
   - Description: "AI-powered bookkeeping for Ballito small businesses"
   - Visibility: **Private** (keep it private for now)
   - **Do NOT** initialize with README (we already have files)
4. **Click "Create repository"**

5. **Copy the repository URL** - it will look like:
   ```
   https://github.com/YOUR_USERNAME/balansio.git
   ```

### Option B: Using GitHub CLI (If you have it installed)

```bash
cd "C:\Users\kenny\OneDrive\BALANSIO"
gh repo create balansio --private --source=. --remote=origin
```

---

## Step 2: Connect Local Repository to GitHub

Open Command Prompt or PowerShell in the BALANSIO folder:

```bash
cd "C:\Users\kenny\OneDrive\BALANSIO"

# Add all files to git
git add .

# Create first commit
git commit -m "Initial commit: BALANSIO marketing website"

# Connect to GitHub (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/balansio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Enter your GitHub credentials when prompted**

---

## Step 3: Deploy to Vercel (3 minutes)

### Create Vercel Account & Deploy

1. **Go to Vercel**: https://vercel.com/signup
2. **Sign up with GitHub** (easiest - connects automatically)
3. **Import Project**:
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find your `balansio` repository
   - Click "Import"

4. **Configure Project**:
   - **Framework Preset**: Other (or leave as detected)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: Leave empty (static site)
   - **Output Directory**: Leave empty
   - **Install Command**: Leave empty

5. **Environment Variables** (skip for now - we'll add later):
   - Click "Deploy" without adding any

6. **Deploy!**
   - Vercel will deploy in ~30 seconds
   - You'll get a URL like: `https://balansio-xyz123.vercel.app`

---

## Step 4: Connect Custom Domain (balansio.co.za)

### In Vercel Dashboard:

1. **Go to your project** → "Settings" → "Domains"
2. **Add Domain**: Enter `balansio.co.za`
3. Vercel will show DNS instructions

### Update DNS at Your Domain Registrar:

**If using Xneelo DNS:**
1. Log into Xneelo
2. Go to Domain Management → DNS
3. Add these records:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 3600

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

4. Save changes
5. Wait 1-24 hours for DNS propagation (usually 1-2 hours)

**Alternative: Use Vercel Nameservers (Recommended)**
1. In Vercel, click "Use Vercel DNS"
2. Vercel gives you nameservers like:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
3. In Xneelo, change nameservers to these
4. Faster, and Vercel manages everything

### Verify:
- Wait for DNS to propagate
- Visit https://balansio.co.za
- Should see your site!
- **Free SSL included automatically!**

---

## Step 5: Automatic Deployments (Already Set Up!)

Now, every time you push code to GitHub, Vercel automatically deploys!

### Workflow:

```bash
# Make changes to files
# Save files

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add WhatsApp integration"

# Push to GitHub
git push

# Vercel automatically deploys! 🚀
# Check Vercel dashboard for deployment status
```

### Deployment Types:

- **Production**: Push to `main` branch → https://balansio.co.za
- **Preview**: Create feature branch → Get unique preview URL
- **Rollback**: Easy rollback to previous deployments in Vercel

---

## Step 6: Branch Strategy (For Development)

### Create Development Branch:

```bash
# Create and switch to develop branch
git checkout -b develop

# Push to GitHub
git push -u origin develop
```

### In Vercel:
- Go to Settings → Git
- Set **Production Branch**: `main`
- All other branches get **Preview Deployments**

### Workflow:
```
develop branch → staging URL (for testing)
    ↓
Pull Request → preview URL
    ↓
Merge to main → production (balansio.co.za)
```

---

## Step 7: Collaborate with Claude Code

Now you can work on BALANSIO directly from here!

### Making Changes:

```bash
# Create feature branch
git checkout -b feature/ai-integration

# Make changes (Claude Code helps you build features)
# ... edit files ...

# Commit changes
git add .
git commit -m "feat: add AI receipt processing"

# Push to GitHub
git push origin feature/ai-integration

# Vercel creates preview deployment automatically!
```

### Review & Deploy:
1. Check preview URL from Vercel
2. Test changes
3. If good → Merge to `main` via GitHub PR
4. Auto-deploys to production!

---

## Useful Git Commands

### Check Status
```bash
git status                    # See what changed
git log --oneline -10        # See last 10 commits
```

### Create Feature Branch
```bash
git checkout -b feature/xero-integration
# Work on feature
git add .
git commit -m "feat: add Xero OAuth"
git push origin feature/xero-integration
```

### Switch Branches
```bash
git checkout main            # Switch to main
git checkout develop         # Switch to develop
git checkout -b new-feature  # Create and switch to new branch
```

### Update from Remote
```bash
git pull origin main         # Pull latest changes from main
```

### Undo Changes
```bash
git restore filename.html    # Undo changes to file
git reset HEAD~1             # Undo last commit (keep changes)
git reset --hard HEAD~1      # Undo last commit (delete changes)
```

---

## Vercel Environment Variables (For Later)

When you add backend features, add secrets in Vercel:

1. Go to Project Settings → Environment Variables
2. Add variables from `.env.example`:
   - `XERO_CLIENT_ID`
   - `WHATSAPP_API_KEY`
   - `OPENAI_API_KEY`
   - etc.

3. Choose environment:
   - Production only
   - Preview only
   - All environments

---

## Monitoring & Analytics

### Vercel Analytics (Free)
1. Go to Project → Analytics tab
2. See page views, performance, etc.

### Vercel Logs
1. Go to Deployments → Select deployment
2. View build logs, function logs

### Connect External Tools
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **Google Analytics**: User behavior

---

## Cost Breakdown

### Free Tier (Perfect for Launch)
- **Vercel Hobby**: Free forever
- Includes:
  - Unlimited deployments
  - Automatic HTTPS
  - 100GB bandwidth/month
  - Serverless functions (100GB-hrs/month)
  - Preview deployments
  - Custom domains

### When to Upgrade to Pro ($20/month)
- When you exceed free limits
- When you need team collaboration
- When you add advanced features

**For Steve's launch: FREE tier is perfect!**

---

## Troubleshooting

### Git push fails
```bash
# Make sure you're connected to GitHub
git remote -v

# Should show:
# origin  https://github.com/YOUR_USERNAME/balansio.git (fetch)
# origin  https://github.com/YOUR_USERNAME/balansio.git (push)

# If not, add it:
git remote add origin https://github.com/YOUR_USERNAME/balansio.git
```

### Vercel deployment fails
- Check Vercel deployment logs
- Ensure all files are committed to Git
- Check `vercel.json` configuration
- Look for errors in build output

### Domain not working
- DNS takes 1-24 hours to propagate
- Check DNS settings with: https://dnschecker.org
- Verify Vercel shows domain as "Valid Configuration"
- Clear browser cache

### Wrong file deployed
- Check which branch is deployed (Vercel → Deployments)
- Ensure you pushed to correct branch
- Redeploy from Vercel dashboard if needed

---

## Quick Reference: Full Workflow

```bash
# 1. Make changes to code
# 2. Test locally (open index.html in browser)

# 3. Stage changes
git add .

# 4. Commit
git commit -m "feat: description of what you added"

# 5. Push to GitHub
git push

# 6. Vercel automatically deploys (check dashboard)

# 7. Test on live URL

# 8. Repeat!
```

---

## Next Steps After Deployment

1. ✅ **Deploy marketing site** (Phase 1)
2. **Share URL with Steve** - Get feedback
3. **Update Steve's contact info** in the code
4. **Share in Ballito groups** - Start marketing!
5. **Get first client inquiry**
6. **Plan Phase 2** - Backend development
7. **Iterate based on feedback**

---

## Git + Vercel Benefits

✅ **Automatic Deployments** - Push code, auto-deploy
✅ **Preview URLs** - Test before production
✅ **Rollbacks** - Easy to revert if something breaks
✅ **Collaboration** - Multiple people can work on code
✅ **Version History** - Never lose code
✅ **Free Hosting** - No cost to start
✅ **SSL Included** - Automatic HTTPS
✅ **Fast CDN** - Site loads fast worldwide
✅ **Continuous Development** - Keep building features

---

**You're now set up for professional, continuous development! Ready to deploy?** 🚀

## Commands to Run Now:

```bash
cd "C:\Users\kenny\OneDrive\BALANSIO"
git add .
git commit -m "Initial commit: BALANSIO marketing website with dev setup"
```

Then follow Step 1 above to create GitHub repo and push!
