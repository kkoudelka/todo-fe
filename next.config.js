module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    endpoint: process.env.ENDPOINT,
  }
}
