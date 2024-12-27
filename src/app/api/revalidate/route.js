import { revalidatePath } from "next/cache";

export async function POST(req) {
  const webhookSecret = process.env.STRAPI_WEBHOOK_SECRET;
  
  if (webhookSecret && req.headers.get('x-strapi-signature') !== webhookSecret) {
    return new Response(JSON.stringify({ message: 'Invalid secret' }), { status: 401 });
  }

  const event = await req.json();
  console.log('Webhook event received:', event);
  const pathToRevalidate = `/`;

  try {
    revalidatePath('/', 'layout')
    revalidatePath('/')
    revalidatePath('/about-us')
    revalidatePath('/contact')
    revalidatePath('/media')
    revalidatePath('/legal')
    revalidatePath('/media/[slug]', 'page')
    revalidatePath('/leaders/[slug]', 'page')
    revalidatePath('/[slug]', 'page')
    
    console.log(`Revalidated path: ${pathToRevalidate}`);
    return new Response(JSON.stringify({ message: 'Path revalidated' }), { status: 200 });
  } catch (error) {
    console.error('Error revalidating path:', error);
    return new Response(JSON.stringify({ message: 'Error revalidating path' }), { status: 500 });
  }
}

export function GET() {
  return new Response('Method Not Allowed', { status: 405 });
}
