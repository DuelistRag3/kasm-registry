/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'CD-IT Services',
    description: 'An unofficial store for Kasm workspaces.',
    icon: 'https://duelistrag3.github.io/kasm-registry/1.0/icon.png',
    listUrl: 'https://duelistrag3.github.io/kasm-registry/',
    contactUrl: 'https://github.com/DuelistRag3/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
