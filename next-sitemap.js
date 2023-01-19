module.exports = {
    siteUrl: 'https://www.bestevaer.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
          {
            userAgent: '*',
            allow: '/',
            disallow: '/api'
          }
        ]
    }
}