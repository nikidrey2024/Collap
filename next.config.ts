
import type {NextConfig} from 'next';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add this if you're deploying to a subdirectory (like username.github.io/repository-name)
  basePath: '/Collapp',
  assetPrefix: '/Collapp/',
}

export default nextConfig
