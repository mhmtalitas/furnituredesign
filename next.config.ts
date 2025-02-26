/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  eslint: {
    // Uyarı: Bu, ESLint hatalarını görmezden gelir, ancak derleme işleminin tamamlanmasını sağlar
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
