export default async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url);
  
  // Only handle Lovable asset requests
  if (!url.pathname.startsWith('/__l5e/assets-v1/')) {
    return new Response(null, { status: 404 });
  }
  
  const filename = url.pathname.split('/').pop() || '';
  const isLogo = filename.includes('logo');
  const isWhiteLogo = filename.includes('white');
  
  let svg: string;
  
  if (isLogo) {
    const bg = isWhiteLogo ? '#ffffff' : '#198A44';
    const textColor = isWhiteLogo ? '#198A44' : '#ffffff';
    
    svg = `<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${bg};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${bg};stop-opacity:0.95" />
        </linearGradient>
      </defs>
      <rect width="200" height="80" fill="url(#logoBg)"/>
      <text 
        x="100" 
        y="40" 
        dominant-baseline="middle" 
        text-anchor="middle" 
        font-family="'Manrope', system-ui, -apple-system, sans-serif" 
        font-size="20" 
        font-weight="700"
        letter-spacing="0.5"
        fill="${textColor}"
      >MEHBUB</text>
      <text 
        x="100" 
        y="58" 
        dominant-baseline="middle" 
        text-anchor="middle" 
        font-family="'Manrope', system-ui, -apple-system, sans-serif" 
        font-size="8" 
        font-weight="500"
        letter-spacing="1"
        fill="${textColor}"
        opacity="0.8"
      >GENERAL TRADING PLC</text>
    </svg>`;
  } else {
    const width = 1200;
    const height = 800;
    
    let gradient = '#e5e7eb';
    let secondColor = '#d1d5db';
    
    if (filename.includes('datacenter') || filename.includes('server')) {
      gradient = '#1e3a8a'; secondColor = '#3b82f6';
    } else if (filename.includes('cyber') || filename.includes('security') || filename.includes('soc')) {
      gradient = '#7c2d12'; secondColor = '#dc2626';
    } else if (filename.includes('team') || filename.includes('collaboration')) {
      gradient = '#166534'; secondColor = '#22c55e';
    } else if (filename.includes('hero') || filename.includes('banner')) {
      gradient = '#0f766e'; secondColor = '#14b8a6';
    }
    
    const title = filename
      .replace(/\.(jpg|jpeg|png|webp|svg)$/, '')
      .replace(/[-_]/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${gradient};stop-opacity:0.9" />
          <stop offset="100%" style="stop-color:${secondColor};stop-opacity:0.7" />
        </linearGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)"/>
      <rect width="${width}" height="${height}" fill="url(#grid)"/>
      <text 
        x="50%" 
        y="50%" 
        dominant-baseline="middle" 
        text-anchor="middle" 
        font-family="'Manrope', system-ui, -apple-system, sans-serif" 
        font-size="16" 
        font-weight="600"
        fill="rgba(255,255,255,0.9)"
      >${title}</text>
    </svg>`;
  }
  
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

export const config = {
  path: '/__l5e/assets-v1/*',
};
