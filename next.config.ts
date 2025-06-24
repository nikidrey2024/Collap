import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // Static export configuration for GitHub Pages
  output: 'export',
  trailingSlash: true,
  
  // GitHub Pages subdirectory configuration
  basePath: '/Collapp',
  assetPrefix: '/Collapp/',
  
  // Your existing TypeScript and ESLint config
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Updated images configuration for static export
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
