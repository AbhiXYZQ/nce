/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'blogger.googleusercontent.com' },
      { protocol: 'https', hostname: 'www.collegebatch.com' },
      { protocol: 'https', hostname: 'image-static.collegedunia.com' },
    ],
  },
};

export default nextConfig;
