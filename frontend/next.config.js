/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // don't resolve 'mongodb' module on the client to prevent this error on build --> Error: Can't resolve 'mongodb'
            config.resolve.fallback = {
                mongodb: false,
            }
        }

        return config;
    }
}
