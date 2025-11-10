export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>BALANSIO</h1>
      <h2 style={{ fontSize: '1.5rem', color: '#2563EB', marginBottom: '2rem' }}>
        AI-Powered Bookkeeping for South African Businesses
      </h2>

      <div style={{ background: '#F9FAFB', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>🚀 Backend is being built!</h3>
        <p style={{ marginBottom: '1rem' }}>
          We're transforming BALANSIO into a full-stack AI bookkeeping platform:
        </p>
        <ul style={{ marginLeft: '2rem', lineHeight: '2' }}>
          <li>✅ Next.js foundation complete</li>
          <li>🔄 Database & authentication - coming next</li>
          <li>🔄 Xero OAuth integration</li>
          <li>🔄 AI receipt processing (OCR)</li>
          <li>🔄 Smart categorization with GPT-4</li>
          <li>🔄 WhatsApp bot integration</li>
          <li>🔄 PayFast subscriptions</li>
        </ul>
      </div>

      <div style={{ background: '#EFF6FF', padding: '2rem', borderRadius: '8px', border: '1px solid #2563EB' }}>
        <h3 style={{ marginBottom: '1rem', color: '#1E40AF' }}>For Steve 💪</h3>
        <p>
          Building this step-by-step to help you start earning. The marketing site is live,
          now we're building the actual product that will save small businesses 15+ hours per month!
        </p>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#FEF3C7', borderRadius: '8px' }}>
        <p style={{ fontSize: '0.9rem' }}>
          <strong>Next:</strong> Setting up PostgreSQL database schema and authentication system
        </p>
      </div>
    </div>
  )
}
