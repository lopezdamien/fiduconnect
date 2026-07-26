import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  async redirects() {
    return [
      // Consolidation des trois pages qui ciblaient "changer de fiduciaire".
      // La page pilier est /services/changer-fiduciaire ; l'article part sous /ressources.
      {
        source: '/changer-fiduciaire',
        destination: '/services/changer-fiduciaire',
        permanent: true,
      },
      {
        source: '/changer-fiduciaire-geneve',
        destination: '/ressources/changer-fiduciaire-geneve',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
