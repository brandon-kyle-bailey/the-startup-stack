/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["app", "hooks", "lib"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
