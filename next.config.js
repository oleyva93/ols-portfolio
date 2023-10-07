/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/564x/50/cc/71/50cc719dc279aaeea54ff4ddb34bf595.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
