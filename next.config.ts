import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: { root: process.cwd() },
  images: {
    remotePatterns: [],
  },
  async headers() {
    const development = process.env.NODE_ENV === 'development';
    // Next.js hydration needs inline scripts. No third-party scripts are allowed.
    // Only the development mobile preview may frame the page.
    const csp = [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${development ? " 'unsafe-eval'" : ''}`,
      "script-src-attr 'none'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      `connect-src 'self'${development ? ' ws://localhost:* ws://127.0.0.1:*' : ''}`,
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      development ? "frame-ancestors 'self' http://localhost:3001 http://127.0.0.1:3001" : "frame-ancestors 'none'",
    ].join('; ');
    const headers = [
      { key: 'Content-Security-Policy', value: csp },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), browsing-topics=()' },
    ];
    if (!development) headers.push(
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
    );
    return [{ source: '/:path*', headers }];
  },
};

export default nextConfig;
