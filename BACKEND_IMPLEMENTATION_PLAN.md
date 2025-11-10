# BALANSIO Backend Implementation Plan

## Overview
Transform the static marketing site into a full-stack AI-powered bookkeeping service with Next.js, PostgreSQL, Xero integration, AI automation, and WhatsApp bot.

## Architecture

### Tech Stack (from Tech Plan)
- **Frontend**: Next.js 14+ with React (App Router)
- **Backend**: Next.js API Routes + TypeScript
- **Database**: PostgreSQL (AWS RDS or Vercel Postgres)
- **Authentication**: NextAuth.js with JWT
- **File Storage**: AWS S3 or Vercel Blob
- **Hosting**: Vercel (or AWS)
- **APIs**: Xero, OpenAI GPT-4, AWS Textract, Twilio WhatsApp
- **Payments**: PayFast (SA payment gateway)

### Phase 1: Foundation (Months 1-2)
**Goal**: User auth + Xero OAuth working

#### 1.1 Project Setup
- [ ] Convert to Next.js 14 project structure
- [ ] Set up TypeScript configuration
- [ ] Configure ESLint + Prettier
- [ ] Set up environment variables (.env.local)
- [ ] Initialize Prisma ORM for PostgreSQL

#### 1.2 Database Schema
```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String?
  passwordHash  String
  phone         String?
  company       String?
  subscriptionStatus String @default("trial") // trial, active, inactive
  createdAt     DateTime @default(now())

  xeroConnections XeroConnection[]
  receipts        Receipt[]
  transactions    Transaction[]
}

model XeroConnection {
  id           String   @id @default(cuid())
  userId       String
  user         User     @relation(fields: [userId], references: [id])

  tenantId     String
  tenantName   String
  accessToken  String   @db.Text // encrypted
  refreshToken String   @db.Text // encrypted
  expiresAt    DateTime

  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

model Receipt {
  id           String   @id @default(cuid())
  userId       String
  user         User     @relation(fields: [userId], references: [id])

  imageUrl     String
  status       String   @default("pending") // pending, processing, completed, error

  // OCR Results
  vendor       String?
  amount       Float?
  date         DateTime?
  taxAmount    Float?
  category     String?
  confidence   Float?

  // AI Analysis
  aiSuggestion Json?

  // Xero Link
  xeroTransactionId String?

  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

model Transaction {
  id           String   @id @default(cuid())
  userId       String
  user         User     @relation(fields: [userId], references: [id])

  xeroId       String?
  type         String   // expense, income
  amount       Float
  description  String
  category     String?
  date         DateTime

  aiCategorized Boolean @default(false)
  confidence    Float?

  createdAt    DateTime @default(now())
}
```

#### 1.3 Authentication System
- [ ] Install NextAuth.js
- [ ] Create auth API routes (/api/auth/[...nextauth])
- [ ] Implement email/password registration
- [ ] Add JWT session management
- [ ] Create protected API middleware
- [ ] Build login/signup pages

#### 1.4 Xero OAuth Integration
- [ ] Register app in Xero Developer Portal
- [ ] Install xero-node SDK
- [ ] Create /api/xero/connect endpoint
- [ ] Create /api/xero/callback endpoint
- [ ] Implement token storage (encrypted)
- [ ] Build token refresh mechanism
- [ ] Create /api/xero/disconnect endpoint
- [ ] Test with Xero Demo Company

### Phase 2: Core AI Features (Month 3)

#### 2.1 Receipt Upload & OCR
- [ ] Set up AWS S3 bucket (or Vercel Blob)
- [ ] Create /api/receipts/upload endpoint
- [ ] Integrate AWS Textract API
- [ ] Parse OCR results (vendor, amount, date, tax)
- [ ] Store extracted data in database
- [ ] Build receipt list UI

#### 2.2 AI Categorization
- [ ] Set up OpenAI API client
- [ ] Create /api/ai/categorize endpoint
- [ ] Build categorization prompt with SA context
- [ ] Fetch Xero Chart of Accounts
- [ ] Implement confidence scoring
- [ ] Store categorization results
- [ ] Build review/approval UI

#### 2.3 Xero Transaction Creation
- [ ] Create /api/xero/transactions/create endpoint
- [ ] Map AI categories to Xero account codes
- [ ] Create Spend Money transactions in Xero
- [ ] Attach receipt images to Xero transactions
- [ ] Handle VAT (15% SA rate)
- [ ] Implement error handling & retries

#### 2.4 Dashboard & Reports
- [ ] Build dashboard page (/)
- [ ] Fetch Xero transactions via API
- [ ] Display recent transactions
- [ ] Create monthly summary generator
- [ ] Use GPT-4 to generate insights
- [ ] Build P&L report view

### Phase 3: WhatsApp Bot (Months 4-7)

#### 3.1 Twilio WhatsApp Setup
- [ ] Register Twilio WhatsApp Business number
- [ ] Set up webhook endpoint (/api/whatsapp/webhook)
- [ ] Implement message signature verification
- [ ] Test sending/receiving messages

#### 3.2 Receipt via WhatsApp
- [ ] Handle incoming image messages
- [ ] Download images from Twilio
- [ ] Trigger OCR pipeline
- [ ] Send confirmation message
- [ ] Send categorization result
- [ ] Allow user to confirm/edit

#### 3.3 Q&A Bot
- [ ] Implement intent recognition
- [ ] Build context-aware prompts with Xero data
- [ ] Handle balance queries
- [ ] Handle invoice queries
- [ ] Handle expense queries
- [ ] Format responses for WhatsApp

#### 3.4 Proactive Notifications
- [ ] Build notification system
- [ ] VAT return reminders
- [ ] Uncategorized transaction alerts
- [ ] Monthly summary delivery
- [ ] Payment due notifications

### Phase 4: Payments & Subscriptions (Month 4)

#### 4.1 PayFast Integration
- [ ] Register PayFast merchant account
- [ ] Create /api/payments/subscribe endpoint
- [ ] Implement IPN webhook (/api/payments/webhook)
- [ ] Handle subscription creation
- [ ] Handle subscription renewal
- [ ] Handle failed payments
- [ ] Build subscription management UI

#### 4.2 Billing Logic
- [ ] Define pricing tiers (R1,499 / R2,999 / Custom)
- [ ] Implement trial period (14 days)
- [ ] Track subscription status
- [ ] Enforce access controls based on plan
- [ ] Generate invoices/receipts for users
- [ ] Email invoices to customers

### Phase 5: Polish & Launch (Months 5-6)

#### 5.1 Security Hardening
- [ ] Implement rate limiting
- [ ] Add CSRF protection
- [ ] Encrypt sensitive data at rest
- [ ] Set up HTTPS/TLS everywhere
- [ ] Implement audit logging
- [ ] Run security scan (OWASP ZAP)

#### 5.2 POPIA Compliance
- [ ] Draft privacy policy
- [ ] Implement consent collection
- [ ] Add data export feature
- [ ] Add data deletion feature
- [ ] Ensure SA data residency (AWS Cape Town)
- [ ] Review data retention policies

#### 5.3 Testing & QA
- [ ] Write integration tests
- [ ] Test Xero OAuth flow end-to-end
- [ ] Test receipt processing pipeline
- [ ] Test payment flows (sandbox)
- [ ] Performance testing (50+ receipts)
- [ ] User acceptance testing (3-5 businesses)

#### 5.4 Deployment
- [ ] Set up production database
- [ ] Configure production environment variables
- [ ] Set up monitoring (Sentry)
- [ ] Configure logging (CloudWatch/Vercel Logs)
- [ ] Deploy to production
- [ ] Set up custom domain (balansio.co.za)

## Directory Structure

```
balansio/
├── app/                    # Next.js App Router
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/
│   │   ├── page.tsx       # Dashboard
│   │   ├── receipts/
│   │   ├── transactions/
│   │   ├── reports/
│   │   └── settings/
│   ├── api/
│   │   ├── auth/          # NextAuth
│   │   ├── xero/          # Xero integration
│   │   ├── receipts/      # Receipt upload/processing
│   │   ├── ai/            # AI endpoints
│   │   ├── whatsapp/      # WhatsApp bot
│   │   └── payments/      # PayFast
│   └── layout.tsx
├── components/
│   ├── ui/                # UI components
│   ├── dashboard/
│   └── forms/
├── lib/
│   ├── auth.ts            # Auth utilities
│   ├── db.ts              # Prisma client
│   ├── xero.ts            # Xero SDK wrapper
│   ├── ai.ts              # OpenAI utilities
│   ├── ocr.ts             # Textract utilities
│   ├── whatsapp.ts        # Twilio utilities
│   └── payments.ts        # PayFast utilities
├── prisma/
│   └── schema.prisma
├── public/                # Static marketing site assets
├── styles/
├── .env.local
├── next.config.js
├── package.json
└── tsconfig.json
```

## Environment Variables Needed

```bash
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-secret-key"

# Xero OAuth
XERO_CLIENT_ID="..."
XERO_CLIENT_SECRET="..."
XERO_REDIRECT_URI="http://localhost:3000/api/xero/callback"

# OpenAI
OPENAI_API_KEY="sk-..."

# AWS (for Textract & S3)
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_REGION="af-south-1"
AWS_S3_BUCKET="balansio-receipts"

# Twilio WhatsApp
TWILIO_ACCOUNT_SID="..."
TWILIO_AUTH_TOKEN="..."
TWILIO_WHATSAPP_NUMBER="whatsapp:+..."

# PayFast
PAYFAST_MERCHANT_ID="..."
PAYFAST_MERCHANT_KEY="..."
PAYFAST_PASSPHRASE="..."
PAYFAST_SANDBOX="true"

# App Config
APP_URL="https://balansio.co.za"
```

## Cost Estimates (from Tech Plan)

### Monthly Operational Costs (MVP)
- **AWS EC2/RDS**: ~R1,500 (hosting + database)
- **OpenAI API**: ~R950 (GPT-3.5/4 calls)
- **AWS Textract**: ~R380 (OCR processing)
- **Twilio WhatsApp**: ~R380 (messaging)
- **Monitoring/Logs**: ~R190
- **Total**: ~R3,400/month (~$180/month)

### Per-Transaction Costs
- PayFast: 3.5% + R2 per payment
- OpenAI: ~R0.40 per user per month
- OCR: ~R0.03 per receipt

### Break-even: 2-3 customers on Professional plan (R2,999/mo)

## Next Steps

1. **Immediate**: Convert current static site to Next.js
2. **Week 1**: Set up database + auth + Xero OAuth
3. **Week 2-3**: Build receipt upload + AI categorization
4. **Week 4**: Add WhatsApp bot basics
5. **Week 5**: Integrate PayFast
6. **Week 6**: Test & deploy MVP

## Success Metrics

- Time to onboard: < 10 minutes
- Receipt processing: < 30 seconds
- Categorization accuracy: > 95%
- Time saved per user: 15+ hours/month
- Customer acquisition cost: < R1,000
- Churn rate: < 5% monthly

---

**Ready to help Steve start earning!** 🚀
