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
  // Thêm cấu hình để giảm kích thước build
  swcMinify: true,
  compress: true,
};

module.exports = nextConfig;
