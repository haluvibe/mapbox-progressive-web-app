/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  publicExcludes: [
    '!robots.txt',
    '!sitemap.xml.gz',
],
})

module.exports = withPWA({
  // config
  dest: 'public',
  publicExcludes: [
      '!robots.txt',
      '!sitemap.xml.gz',
  ],
})
