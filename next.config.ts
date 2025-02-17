import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/bio",
        destination: "https://e-z.bio/kc",
        permanent: true,
      },
      {
        source: "/sky",
        destination: "https://cupcake.shiiyu.moe/stats/q_ez/Pomegranate",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/q4ow",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2.slop.sh",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
