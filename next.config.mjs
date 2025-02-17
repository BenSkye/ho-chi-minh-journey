/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Tăng giới hạn performance hints
    config.performance = {
      ...config.performance,
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    };

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };

    return config;
  },
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  compress: true,
};

// Thay module.exports bằng export default
export default nextConfig;
