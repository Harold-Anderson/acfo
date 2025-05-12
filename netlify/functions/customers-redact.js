const crypto = require('crypto');

const SHOPIFY_SHARED_SECRET = process.env.SHOPIFY_SHARED_SECRET;

function isShopifyHmacValid(event) {
  const hmacHeader = event.headers['x-shopify-hmac-sha256'] || event.headers['X-Shopify-Hmac-Sha256'];
  if (!hmacHeader || !SHOPIFY_SHARED_SECRET) return false;
  const digest = crypto.createHmac('sha256', SHOPIFY_SHARED_SECRET).update(event.body, 'utf8').digest('base64');
  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(hmacHeader));
}

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body || '{}');
  // TODO: Implement customer data erasure logic here
  console.log('Customer data erasure request:', body);
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};
