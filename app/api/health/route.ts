import { proxyEnabled } from '@/lib/youtube/proxy';

export const runtime = 'nodejs';

export async function GET() {
  // youtubeProxy delata si YOUTUBE_PROXY_URL está viva en este deployment,
  // sin exponer la URL ni credenciales.
  return Response.json({
    ok: true,
    service: 'ai-app-test',
    youtubeProxy: proxyEnabled(),
    ts: new Date().toISOString(),
  });
}
