import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * Static export configuration
   * - Generates a static site (HTML/CSS/JS) instead of a server application
   * - Enables deployment on any static hosting service
   */
  output: 'export',

  /**
   * Emits `page/index.html` instead of `page.html` for each route
   * - Lets static hosts serve directory URLs (e.g. /anciens_programmes/2024) via index.html
   *   without needing a rewrite rule to append .html
   */
  trailingSlash: true,

  /**
   * Image configuration
   * - Disables automatic image optimization as it's not available in static export mode
   * - Images must be manually optimized before import
   * - Alternative: use an external image optimization service
   * @see https://nextjs.org/docs/messages/export-image-api
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
