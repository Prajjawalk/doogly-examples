/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    config.experiments = { asyncWebAssembly: true, layers: true };
    return config
  },
};

module.exports = nextConfig;
