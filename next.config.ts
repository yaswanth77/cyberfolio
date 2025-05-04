import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // 👈 required for static export
  basePath: '/cyberfolio', // 👈 use your actual repo name here
  assetPrefix: '/cyberfolio/',

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
