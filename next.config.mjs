/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: 'https', hostname: 'bmt-logistics.ae' },
      { protocol: 'https', hostname: 'images.stockcake.com' },
      { protocol: 'https', hostname: 'hillphoenixindustrial.com' },
      { protocol: 'https', hostname: 'static.frozenet.com' },
      { protocol: 'https', hostname: 'www.nordiccoldchain.com' },
      { protocol: 'https', hostname: 'riddhidisplay.com' },
      { protocol: 'https', hostname: 'lengdicold.com' },
      { protocol: 'https', hostname: 'wallpaperaccess.com' },
    ],
  },
}

export default nextConfig
