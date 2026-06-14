/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.cabinet-patrimonium.fr' }],
        destination: 'https://cabinet-patrimonium.fr/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;