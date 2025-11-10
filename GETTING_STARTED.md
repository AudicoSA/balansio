# Getting Started with BALANSIO Backend

## What We've Built So Far

✅ **Next.js 16 Foundation**
- Modern React framework with App Router
- TypeScript for type safety
- Running on http://localhost:3000

✅ **Database Schema (Prisma)**
- Complete PostgreSQL schema designed
- Models for Users, Xero connections, Receipts, Transactions, Payments
- Audit logging for POPIA compliance
- Ready to migrate once database is connected

✅ **Project Structure**
```
balansio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── lib/
│   └── db.ts              # Prisma client singleton
├── prisma/
│   └── schema.prisma      # Database schema
├── public/                # Static assets
│   ├── landing.html       # Original marketing page (preserved)
│   ├── styles.css
│   └── script.js
├── .env.local             # Environment variables
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies
```

## Next Steps to Get BALANSIO Working

### 1. Set Up Database (Choose One)

#### Option A: Vercel Postgres (Recommended - Easiest)
```bash
# Install Vercel CLI
npm i -g vercel

# Link to Vercel project
vercel link

# Create Postgres database
vercel postgres create balansio-db

# Pull environment variables (includes DATABASE_URL)
vercel env pull .env.local
```

#### Option B: Supabase (Free Tier)
1. Go to https://supabase.com/
2. Create new project
3. Copy the "Connection Pooling" URL (not Direct Connection)
4. Update `DATABASE_URL` in `.env.local`

#### Option C: Neon (Free Tier)
1. Go to https://neon.tech/
2. Create new project in `af-south-1` region (Cape Town - for POPIA compliance)
3. Copy connection string
4. Update `DATABASE_URL` in `.env.local`

### 2. Initialize Database
```bash
# Generate Prisma Client
npx prisma generate

# Run first migration
npx prisma migrate dev --name init

# Open Prisma Studio to view database
npx prisma studio
```

### 3. Register for External Services

#### Xero Developer Account
1. Go to https://developer.xero.com/
2. Create app (choose "Web App")
3. Set redirect URI: `http://localhost:3000/api/xero/callback`
4. Copy Client ID and Secret to `.env.local`
5. Add scopes: `accounting.transactions`, `accounting.attachments`, `accounting.settings`, `offline_access`

#### AWS Account (for Textract & S3)
1. Create IAM user with permissions:
   - `AmazonTextractFullAccess`
   - `AmazonS3FullAccess`
2. Create S3 bucket in `af-south-1` (Cape Town)
3. Copy Access Key & Secret to `.env.local`

#### Twilio WhatsApp (Optional for now)
1. Go to https://www.twilio.com/
2. Get WhatsApp sandbox for development
3. Copy credentials to `.env.local`

#### PayFast (SA Payments)
1. Go to https://www.payfast.co.za/
2. Create merchant account
3. Enable sandbox mode for testing
4. Copy credentials to `.env.local`

### 4. Install Remaining Dependencies

```bash
# Authentication
npm install next-auth

# Xero SDK
npm install xero-node

# AWS SDK
npm install @aws-sdk/client-textract @aws-sdk/client-s3

# Twilio (WhatsApp)
npm install twilio

# Utilities
npm install zod date-fns
```

### 5. What to Build Next (Priority Order)

#### Week 1: Authentication & Xero
- [ ] Set up NextAuth.js with email/password
- [ ] Build login/signup pages
- [ ] Create Xero OAuth flow
- [ ] Test connecting to Xero Demo Company

#### Week 2: Receipt Processing
- [ ] Build receipt upload UI
- [ ] Integrate AWS Textract for OCR
- [ ] Store extracted data in database
- [ ] Display receipts in dashboard

#### Week 3: AI Categorization
- [ ] Create OpenAI integration helper
- [ ] Build categorization engine
- [ ] Fetch Xero Chart of Accounts
- [ ] Let users approve/reject AI suggestions

#### Week 4: Xero Integration
- [ ] Post transactions to Xero
- [ ] Attach receipt images
- [ ] Handle VAT (15% SA rate)
- [ ] Sync Xero data back

#### Week 5: Dashboard & Reports
- [ ] Build main dashboard
- [ ] Show transaction list
- [ ] Generate monthly AI summaries
- [ ] Create basic reports

#### Week 6: WhatsApp Bot
- [ ] Set up Twilio webhook
- [ ] Handle incoming images
- [ ] Process receipts via WhatsApp
- [ ] Send confirmations

#### Week 7: Payments
- [ ] Integrate PayFast
- [ ] Build subscription flow
- [ ] Handle IPN webhooks
- [ ] Enforce subscription limits

#### Week 8: Polish & Launch
- [ ] Security hardening
- [ ] POPIA compliance review
- [ ] User testing
- [ ] Deploy to production

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Database operations
npx prisma studio        # Open database GUI
npx prisma migrate dev   # Create new migration
npx prisma generate      # Regenerate Prisma Client
npx prisma db push       # Push schema changes (no migration)

# Linting
npm run lint
```

## Environment Setup Checklist

- [ ] Database connected and migrated
- [ ] Xero OAuth credentials configured
- [ ] OpenAI API key working (already ✓)
- [ ] AWS credentials for Textract/S3
- [ ] NextAuth secret generated
- [ ] Twilio WhatsApp (optional for MVP)
- [ ] PayFast sandbox credentials

## Testing the Current Setup

1. Server should be running on http://localhost:3000
2. You should see a simple status page
3. Check that OpenAI key is working:
   ```bash
   curl https://api.openai.com/v1/models \
     -H "Authorization: Bearer YOUR_KEY"
   ```

## Cost Breakdown (Monthly - MVP Phase)

- **Database**: Free (Vercel/Supabase/Neon free tier)
- **Hosting**: Free (Vercel free tier)
- **OpenAI API**: ~R500 (low usage with GPT-3.5)
- **AWS Textract**: ~R50 (500 receipts/month)
- **AWS S3**: ~R20 (storage)
- **Twilio WhatsApp**: ~R100 (messages)
- **PayFast**: 3.5% per transaction (no fixed cost)

**Total**: ~R670/month + transaction fees

**Break-even**: 1 customer on Professional plan (R2,999)

## Support & Resources

- **Prisma Docs**: https://www.prisma.io/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Xero API**: https://developer.xero.com/documentation/api/api-overview
- **AWS Textract**: https://docs.aws.amazon.com/textract/
- **Twilio WhatsApp**: https://www.twilio.com/docs/whatsapp
- **PayFast API**: https://developers.payfast.co.za/

## For Steve

This is the foundation! Once you have a database connected, we can start building out the actual features:

1. **User signup** → Get people registered
2. **Xero connection** → Link their accounting
3. **Receipt uploads** → Start processing documents
4. **AI magic** → Categorize automatically
5. **WhatsApp bot** → Ultimate convenience
6. **Get paid** → PayFast subscriptions

The marketing site is live and converting. Now we build the product that delivers on the promise!

Let me know which database option you want to use and we'll get it migrated! 🚀
