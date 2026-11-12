import type { Plugin } from 'vite';

/**
 * Vite plugin to handle Lovable asset URLs in local development
 * In production on Lovable platform, assets are served by Lovable's CDN
 * For local development, we provide SVG placeholders
 */
export function lovableAssetsPlugin(): Plugin {
  return {
    name: 'lovable-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.startsWith('/__l5e/assets-v1/')) {
          const filename = req.url.split('/').pop() || '';
          const isLogo = filename.includes('logo');
          const width = isLogo ? 200 : 1200;
          const height = isLogo ? 80 : 800;
          const bgColor = isLogo ? '#198A44' : '#e5e7eb';
          const textColor = isLogo ? '#ffffff' : '#6b7280';
          
          const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <rect width="${width}" height="${height}" fill="${bgColor}"/>
            <text 
              x="50%" 
              y="50%" 
              dominant-baseline="middle" 
              text-anchor="middle" 
              font-family="system-ui, -apple-system, sans-serif" 
              font-size="${isLogo ? '16' : '14'}" 
              font-weight="${isLogo ? 'bold' : 'normal'}"
              fill="${textColor}"
            >${isLogo ? 'MEHBUB' : filename}</text>
          </svg>`;
          
          res.setHeader('Content-Type', 'image/svg+xml');
          res.setHeader('Cache-Control', 'public, max-age=3600');
          res.end(svg);
          return;
        }
        next();
      });
    },
  };
}
