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
        source: "/github",
        destination: "https://github.com/keirim",
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
    ],
  },
};

export default nextConfig;
