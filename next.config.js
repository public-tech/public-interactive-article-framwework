/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,
    outputStandalone: true,

  },
}

module.exports = nextConfig
