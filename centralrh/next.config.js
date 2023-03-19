/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['bootstrap']);
const nextConfig = withTM({
  reactStrictMode: true,
})

module.exports = nextConfig
