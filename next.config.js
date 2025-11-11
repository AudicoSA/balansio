/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'balansio.co.za'],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'balansio-receipts.s3.af-south-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
      },
    ],
  },
}

module.exports = nextConfig
