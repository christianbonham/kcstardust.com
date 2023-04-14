/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  trailingSlash: true,
  experimental: { images: { layoutRaw: true } },
  reactStrictMode: true,

}

export default nextConfig