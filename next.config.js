const repo = 'Promptly-Technologies-LLC.github.io'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: false
  },
  images: {
    loader: 'imgix',
    path: 'the "domain" of your Imigix source',
  },
  output: 'export',
  distDir: 'dist'
};

module.exports = nextConfig;
