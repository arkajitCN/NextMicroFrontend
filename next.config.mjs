/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config, { isServer }) {
    // Expose components globally for client-side usage
    if (!isServer) {
      config.output.library = "MyNextJsApp";
      config.output.libraryTarget = "window";
    }

    return config;
  },
};

export default nextConfig;
