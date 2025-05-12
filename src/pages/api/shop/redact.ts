// Shopify privacy compliance endpoint for shop data erasure (see: https://shopify.dev/docs/apps/build/compliance/privacy-law-compliance)
export async function post({ request }) {
  const body = await request.json();
  // TODO: Implement shop data erasure logic here
  console.log('Shop data erasure request:', body);
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
