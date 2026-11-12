import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

// Helper to create placeholder images for local development
function createPlaceholderSVG(filename: string): string {
  const isLogo = filename.includes('logo');
  const width = isLogo ? 200 : 1200;
  const height = isLogo ? 80 : 800;
  const bgColor = isLogo ? '#198A44' : '#e5e7eb';
  const textColor = isLogo ? '#ffffff' : '#6b7280';
  
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
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
}

// Hosting compresses every response at the edge. Never compress a body (gzip, brotli,
// CompressionStream) or set content-encoding here or in a server route: the body gets encoded
// twice and renders garbled.
export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      
      // Handle Lovable asset requests for local development
      // In production on Lovable platform, these are served by Lovable's CDN
      if (url.pathname.startsWith('/__l5e/assets-v1/')) {
        const filename = url.pathname.split('/').pop() || '';
        const svg = createPlaceholderSVG(filename);
        
        return new Response(svg, {
          headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'public, max-age=3600',
          },
        });
      }
      
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
