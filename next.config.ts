import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Domaine canonique sans www : évite le contenu dupliqué www / non-www.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.intrastar.fr" }],
        destination: "https://intrastar.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
