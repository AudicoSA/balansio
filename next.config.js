/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'balansio.co.za'],
    },
  },
  images: {
    domains: ['balansio-receipts.s3.af-south-1.amazonaws.com'],
  },
}

module.exports = nextConfig
