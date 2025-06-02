/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_IMAGE_HOST_1,
            },
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_IMAGE_HOST_2,
            },
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_IMAGE_HOST_3,
            }
        ]
    }
};

export default nextConfig;
