/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/interprete', destination: '/', permanent: true },
    ];
  },
};
export default nextConfig;
