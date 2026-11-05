const productImageContext = require.context("../../src/product_imgs", false, /\.(png|jpe?g|webp|avif)$/i);

export function resolveProductImage(picture) {
  if (!picture) return null;

  try {
    const asset = productImageContext(`./${picture}`);
    return asset?.default ?? asset;
  } catch {
    return null;
  }
}
