import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true
    };

    return config;
  },
  // Disable image optimization if you're having memory issues
  images: {
    unoptimized: true
  }
};

export default nextConfig;
