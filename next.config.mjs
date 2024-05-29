/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.cache = false;

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
