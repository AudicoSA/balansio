# BALANSIO - Full Project Architecture

## Current Status: Phase 1 - Marketing Website ✅
The landing page is live-ready. Next phases will build the actual AI platform.

---

## Project Phases

### Phase 1: Marketing Website (COMPLETED)
**Goal**: Get Steve's first clients through a professional landing page
- ✅ Landing page with hero, features, pricing
- ✅ Contact form and WhatsApp integration
- ✅ SEO optimization for Ballito
- ✅ Mobile-responsive design
- ✅ Vercel deployment ready

### Phase 2: Backend Infrastructure (NEXT)
**Goal**: Build the foundation for AI automation
- [ ] Set up Next.js or Node.js backend
- [ ] Database design (PostgreSQL or MongoDB)
- [ ] User authentication system
- [ ] Client dashboard framework
- [ ] API architecture

### Phase 3: Xero Integration
**Goal**: Connect to Xero's accounting platform
- [ ] Xero OAuth authentication
- [ ] Sync bank feeds from Xero
- [ ] Read/write transactions
- [ ] Pull financial reports
- [ ] Webhook handling for real-time updates

### Phase 4: WhatsApp Integration
**Goal**: Receipt scanning via WhatsApp
- [ ] WhatsApp Business API setup
- [ ] Receive image messages
- [ ] Queue system for processing
- [ ] Send confirmations back to users
- [ ] Handle conversation flows

### Phase 5: AI Document Processing
**Goal**: Extract data from receipts/invoices
- [ ] OCR (Optical Character Recognition) setup
- [ ] AI model for data extraction (OpenAI/Claude/Custom)
- [ ] Extract: Date, Amount, Supplier, VAT, Category
- [ ] Confidence scoring
- [ ] Human review queue for low-confidence items

### Phase 6: AI Categorization & Reconciliation
**Goal**: Automate bookkeeping tasks
- [ ] Transaction categorization engine
- [ ] Learn from user corrections
- [ ] Auto-reconcile bank feeds
- [ ] Detect duplicates
- [ ] Flag anomalies

### Phase 7: Client Portal
**Goal**: Give clients access to their books
- [ ] Client login system
- [ ] Real-time dashboard
- [ ] Financial reports viewer
- [ ] Upload receipts manually
- [ ] Chat with Steve / Support

### Phase 8: Billing & Subscriptions
**Goal**: Automate Steve's revenue
- [ ] Stripe integration
- [ ] Subscription management (Starter/Pro/Business)
- [ ] Usage tracking (transaction counts)
- [ ] Automated invoicing
- [ ] Payment failure handling

### Phase 9: Advanced Features
**Goal**: Competitive advantages
- [ ] Predictive cash flow
- [ ] Tax estimate calculator
- [ ] SARS eFiling integration
- [ ] Multi-client management for Steve
- [ ] White-label reporting

---

## Recommended Tech Stack

### Frontend
- **Framework**: Next.js 14 (React with App Router)
- **Styling**: Tailwind CSS (easier to maintain than custom CSS)
- **UI Components**: shadcn/ui or Radix UI
- **State Management**: React Context / Zustand
- **Forms**: React Hook Form + Zod validation

### Backend
- **Framework**: Next.js API Routes (serverless functions on Vercel)
- **Authentication**: NextAuth.js or Clerk
- **API**: RESTful + tRPC (type-safe)
- **Queue System**: Vercel Cron + Upstash Redis
- **File Storage**: Vercel Blob or AWS S3

### Database
- **Primary DB**: PostgreSQL (via Vercel Postgres or Supabase)
- **ORM**: Prisma (type-safe, great migrations)
- **Caching**: Redis (Upstash)
- **Real-time**: Supabase Realtime or Pusher

### AI & Processing
- **OCR**: Tesseract.js or Google Vision API
- **AI Model**: OpenAI GPT-4 Vision or Claude 3 (Anthropic)
- **Embeddings**: OpenAI Embeddings for learning patterns
- **Fallback**: Azure Document Intelligence

### Integrations
- **Accounting**: Xero API
- **WhatsApp**: WhatsApp Business API or Twilio
- **Payments**: Stripe
- **Email**: SendGrid or Resend
- **SMS**: Twilio (for alerts)

### DevOps
- **Hosting**: Vercel (frontend + serverless functions)
- **Version Control**: Git + GitHub
- **CI/CD**: Vercel auto-deploy on push
- **Monitoring**: Vercel Analytics + Sentry
- **Logs**: Vercel Logs or Axiom

---

## Folder Structure (Future)

```
BALANSIO/
├── .github/
│   └── workflows/          # CI/CD pipelines
├── public/                 # Static assets
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── app/               # Next.js 14 App Router
│   │   ├── (marketing)/   # Landing page
│   │   ├── (dashboard)/   # Client portal
│   │   ├── api/           # API routes
│   │   └── layout.tsx
│   ├── components/        # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── forms/
│   │   └── dashboard/
│   ├── lib/               # Utility functions
│   │   ├── ai/            # AI processing logic
│   │   ├── xero/          # Xero integration
│   │   ├── whatsapp/      # WhatsApp integration
│   │   └── db/            # Database helpers
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript types
│   └── styles/            # Global styles
├── prisma/                # Database schema
│   ├── schema.prisma
│   └── migrations/
├── scripts/               # Build/deploy scripts
├── tests/                 # Unit & integration tests
├── .env.example           # Environment variables template
├── .gitignore
├── package.json
├── tsconfig.json
├── vercel.json
└── README.md
```

---

## Data Models (Preliminary)

### User (Steve + Clients)
```typescript
type User = {
  id: string
  email: string
  name: string
  role: 'admin' | 'client'
  whatsappNumber: string
  createdAt: Date
}
```

### Client (Business)
```typescript
type Client = {
  id: string
  userId: string
  businessName: string
  industry: string
  xeroTenantId: string
  subscriptionTier: 'starter' | 'professional' | 'business'
  monthlyTransactionCount: number
  status: 'active' | 'paused' | 'cancelled'
}
```

### Transaction
```typescript
type Transaction = {
  id: string
  clientId: string
  date: Date
  amount: number
  description: string
  category: string
  supplier: string
  vatAmount: number
  source: 'whatsapp' | 'manual' | 'bank_feed'
  receiptUrl?: string
  xeroTransactionId?: string
  confidence: number  // AI confidence score
  reviewedBy?: string
  status: 'pending' | 'approved' | 'flagged'
}
```

### Receipt
```typescript
type Receipt = {
  id: string
  clientId: string
  imageUrl: string
  uploadedVia: 'whatsapp' | 'portal'
  processedAt?: Date
  extractedData?: {
    date?: Date
    amount?: number
    supplier?: string
    vatAmount?: number
  }
  confidence?: number
  transactionId?: string
}
```

### XeroConnection
```typescript
type XeroConnection = {
  id: string
  clientId: string
  tenantId: string
  accessToken: string  // encrypted
  refreshToken: string // encrypted
  expiresAt: Date
  lastSyncAt?: Date
}
```

---

## API Routes (Future)

### Authentication
- `POST /api/auth/signup` - Client signup
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout

### Xero Integration
- `GET /api/xero/connect` - Start OAuth flow
- `GET /api/xero/callback` - OAuth callback
- `POST /api/xero/sync` - Manual sync trigger
- `GET /api/xero/accounts` - Get chart of accounts
- `POST /api/xero/transaction` - Create transaction

### WhatsApp
- `POST /api/whatsapp/webhook` - Receive messages
- `POST /api/whatsapp/send` - Send message to client

### Transactions
- `GET /api/transactions` - List transactions
- `POST /api/transactions` - Create transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

### Receipts
- `POST /api/receipts/upload` - Upload receipt
- `POST /api/receipts/process` - Process with AI
- `GET /api/receipts/:id` - Get receipt details

### AI Processing
- `POST /api/ai/categorize` - Categorize transaction
- `POST /api/ai/extract` - Extract data from receipt
- `POST /api/ai/reconcile` - Auto-reconcile

### Reports
- `GET /api/reports/profit-loss` - P&L statement
- `GET /api/reports/cash-flow` - Cash flow
- `GET /api/reports/balance-sheet` - Balance sheet

### Billing
- `GET /api/billing/subscription` - Current subscription
- `POST /api/billing/subscribe` - Create subscription
- `POST /api/billing/cancel` - Cancel subscription
- `POST /api/billing/webhook` - Stripe webhook

---

## Development Workflow

### 1. Local Development
```bash
npm run dev       # Start dev server
npm run db:push   # Push database changes
npm run db:studio # Open Prisma Studio
npm test          # Run tests
```

### 2. Git Workflow
```bash
git checkout -b feature/xero-integration
# Make changes
git add .
git commit -m "feat: add Xero OAuth integration"
git push origin feature/xero-integration
# Create PR on GitHub
```

### 3. Deployment
- Push to `main` branch → Auto-deploys to production (balansio.co.za)
- Push to `develop` branch → Auto-deploys to staging (staging.balansio.co.za)
- Preview deployments for every PR

---

## Security Considerations

- **API Keys**: Never commit to Git (use .env)
- **Encryption**: Encrypt Xero tokens, client data
- **HTTPS**: Enforce SSL everywhere
- **Rate Limiting**: Prevent API abuse
- **Input Validation**: Sanitize all user inputs
- **CORS**: Restrict API access
- **Webhooks**: Verify signatures (Xero, Stripe, WhatsApp)
- **File Uploads**: Validate file types, scan for malware
- **Database**: Use prepared statements (Prisma handles this)

---

## Cost Estimates (Monthly)

### For 10 Clients at Launch

| Service | Cost |
|---------|------|
| Vercel Pro | $20 (~R380) |
| Vercel Postgres | $10-30 (~R190-570) |
| Upstash Redis | $10 (~R190) |
| OpenAI API | $50-100 (~R950-1900) |
| WhatsApp Business API | $0 (1000 free msgs/month) |
| Xero API | Free (partner tier) |
| Domain | R120/year |
| **Total** | **~R1,700-3,000/month** |

### Revenue Comparison
- 10 Clients at R1,799/month = **R17,990/month**
- Costs: R3,000
- **Net Profit: R14,990/month**

As Steve scales:
- 20 clients = R35,980 revenue - R4,000 costs = **R31,980 profit**
- 50 clients = R89,950 revenue - R8,000 costs = **R81,950 profit**

---

## Next Immediate Steps

1. **Deploy Phase 1 to Vercel** (marketing site - NOW)
2. **Get Steve's first client** (validate the business model)
3. **Plan Phase 2 architecture** (decide: Next.js, database, etc.)
4. **Set up development environment** (Node.js, Prisma, etc.)
5. **Start Xero integration** (most critical for MVP)

---

## Questions to Answer Before Phase 2

1. **Tech Stack Confirmation**: Next.js + Prisma + PostgreSQL?
2. **AI Provider**: OpenAI GPT-4 Vision or Claude 3 Opus?
3. **WhatsApp API**: Official Business API or Twilio?
4. **Database Host**: Vercel Postgres, Supabase, or own PostgreSQL?
5. **File Storage**: Vercel Blob or AWS S3?
6. **MVP Scope**: Which features are absolutely essential for first client?

---

**Let's ship Phase 1 first, then iterate based on real client needs!** 🚀
