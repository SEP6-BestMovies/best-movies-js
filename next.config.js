/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  images: {
    domains: ['image.tmdb.org'],
  },
  env: {
    apiKeyDb: '9aac6c120264793707739eac992613b7'
  },
}
