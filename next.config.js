/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/api/graphql",
        headers: [
          {
            key: "access-control-allow-origin",
            value: "*",
          },
          {
            key: "access-control-allow-methods",
            value: "POST",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
