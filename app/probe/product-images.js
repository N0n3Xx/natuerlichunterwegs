import prod1 from "../../src/product_imgs/Prod1.jpeg";
import prod2 from "../../src/product_imgs/Prod2.jpeg";
import prod3 from "../../src/product_imgs/Prod3.jpeg";

const productImages = {
  "Prod1.jpeg": prod1,
  "Prod2.jpeg": prod2,
  "Prod3.jpeg": prod3,
};

export function resolveProductImage(picture) {
  return picture ? productImages[picture] ?? null : null;
}
