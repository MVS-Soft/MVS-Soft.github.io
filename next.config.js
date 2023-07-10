const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''



const nextConfig = {
  output: 'export',
//   images: {
//     loader: 'custom',
//     loaderFile: './app/image.ts',
//   },
  images: { unoptimized: true },
  experimental: {
    appDir: true,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig

