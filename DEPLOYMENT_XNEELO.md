# Deploy BALANSIO to Xneelo Server - Easy Guide

## Option 1: cPanel File Manager (Easiest - No Software Needed!)

### Step 1: Log into Xneelo
1. Go to https://my.xneelo.co.za
2. Log in with your credentials
3. Click on "cPanel" for your hosting account

### Step 2: Access File Manager
1. In cPanel, find and click **File Manager**
2. Navigate to `public_html` folder (or `www` folder)
3. If you want balansio.co.za as the main site, upload directly here
4. OR create a subfolder called `balansio` if you have other sites

### Step 3: Upload Files
1. Click **Upload** button at the top
2. Drag and drop these 3 files:
   - index.html
   - styles.css
   - script.js
3. Wait for upload to complete (should take 5 seconds)

### Step 4: Point Domain to Your Server
If balansio.co.za isn't pointed to this server yet:

1. In Xneelo control panel, go to **Domains**
2. Find `balansio.co.za`
3. Click **Manage DNS**
4. Add/Update these records:

   ```
   Type: A Record
   Name: @
   Value: [Your server IP - Xneelo will show this]
   TTL: 3600

   Type: A Record
   Name: www
   Value: [Same server IP]
   TTL: 3600
   ```

5. Save changes (DNS takes 1-24 hours to propagate, but usually 1-2 hours)

### Step 5: Test!
1. Go to http://balansio.co.za
2. It should load the website!

---

## Option 2: FTP Upload (If You Prefer FTP Software)

### What You Need:
- **FTP Client** like FileZilla (free from https://filezilla-project.org)
- Your FTP credentials from Xneelo

### Steps:

1. **Get FTP Details from Xneelo:**
   - Log into Xneelo
   - Go to cPanel → FTP Accounts
   - Note down:
     - FTP Server: Usually `ftp.yourdomain.co.za` or `ftp.balansio.co.za`
     - Username: Your FTP username
     - Password: Your FTP password
     - Port: 21 (or 22 for SFTP)

2. **Connect with FileZilla:**
   - Open FileZilla
   - Enter:
     - Host: `ftp.balansio.co.za`
     - Username: [your username]
     - Password: [your password]
     - Port: 21
   - Click **Quickconnect**

3. **Upload Files:**
   - On the left side: Navigate to your BALANSIO folder on your computer
   - On the right side: Navigate to `public_html` (or `www`)
   - Select all 3 files (index.html, styles.css, script.js)
   - Drag them to the right side
   - Done!

4. **Test:**
   - Visit http://balansio.co.za

---

## Option 3: Git Deploy (For Future Updates - Advanced)

If you want to make updates easier in the future:

1. **Set up Git on Xneelo:**
   - Log into cPanel
   - Look for "Git Version Control" (if available)
   - Or use SSH access

2. **Push from Local:**
   - Initialize git in your BALANSIO folder:
     ```bash
     git init
     git add .
     git commit -m "Initial BALANSIO website"
     ```
   - Connect to your server repo
   - Push updates easily in the future

---

## Important: Enable SSL (HTTPS) - FREE!

Once the site is live, enable free SSL for security:

### In Xneelo cPanel:
1. Find **SSL/TLS Status** or **Let's Encrypt SSL**
2. Select `balansio.co.za`
3. Click **Install SSL Certificate**
4. Wait 2-5 minutes
5. Your site will now be https://balansio.co.za (secure!)

This is **FREE** with Xneelo and makes your site more trustworthy!

---

## Setting Up Professional Email (steve@balansio.co.za)

### In Xneelo cPanel:

1. Go to **Email Accounts**
2. Click **Create**
3. Enter:
   - Email: `steve`
   - Domain: `balansio.co.za`
   - Password: [Choose a strong password]
   - Mailbox Quota: 250 MB (or unlimited)
4. Click **Create**

### Access Email:
- **Webmail**: https://webmail.balansio.co.za
- **Or set up in Gmail/Outlook:**
  - Incoming (IMAP):
    - Server: mail.balansio.co.za
    - Port: 993
    - SSL: Yes
  - Outgoing (SMTP):
    - Server: mail.balansio.co.za
    - Port: 465
    - SSL: Yes

---

## Troubleshooting

### Site shows "Index of /" or directory listing
- Make sure the file is named exactly `index.html` (lowercase)
- It must be in the root of public_html

### Site doesn't load at all
- Check DNS settings are correct
- Wait 1-2 hours for DNS propagation
- Clear your browser cache (Ctrl+Shift+Del)

### Styles look broken
- Make sure `styles.css` is in the same folder as `index.html`
- Check the file uploaded completely (not corrupted)
- Clear browser cache

### Contact form doesn't work
- Remember to update Steve's phone number in the HTML
- The form currently shows an alert - this is normal
- See main README.md for form integration options

---

## Quick Checklist Before Launch

- [ ] Upload all 3 files to Xneelo
- [ ] Point balansio.co.za domain to your server
- [ ] Wait for DNS propagation (1-2 hours)
- [ ] Enable SSL certificate (HTTPS)
- [ ] Update phone number (27XXXXXXXXX → Steve's real number)
- [ ] Set up steve@balansio.co.za email
- [ ] Test website on mobile phone
- [ ] Test all buttons and links
- [ ] Test contact form
- [ ] Share with 5 friends for feedback

---

## Estimated Timeline

- **Uploading files**: 2 minutes
- **DNS propagation**: 1-2 hours (if domain not pointed yet)
- **SSL setup**: 5 minutes
- **Email setup**: 5 minutes
- **Total**: Can be live in under 3 hours!

---

## Cost Summary

Using your existing Xneelo server:
- Hosting: **R0** (already paid)
- Domain: **R0** (already purchased)
- SSL Certificate: **R0** (free Let's Encrypt)
- Email: **R0** (included with hosting)

**Total additional cost: R0!**

This means Steve's only costs are:
- Your existing Xneelo monthly fee (which you're already paying)
- Time and effort to market the service

**Every client he signs up is pure profit!**

---

## Need Help?

1. **Xneelo Support**: https://xneelo.co.za/help - They're very helpful!
2. **Check server status**: Make sure your Xneelo account is active
3. **File permissions**: Should be set automatically, but if issues arise, set to 644 for files

---

## After Launch - Next Steps

1. **Test everything** on mobile and desktop
2. **Share the link** in Ballito Facebook groups
3. **Update the site** with real testimonials as Steve gets clients
4. **Monitor traffic** - Consider adding Google Analytics
5. **Backup regularly** - Download files from cPanel monthly

---

**You're ready to launch! This is the easiest and cheapest option for Steve.** 🚀
