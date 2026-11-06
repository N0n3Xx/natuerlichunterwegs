import productConfiguration from "./product-data.json";

export type Product = { id: string; name: string; picture: string; description: string; application: string; ingredients: string[] };
export type SampleBag = { id: 0 | 1; products: [Product, Product, Product] };

export const sampleBags = productConfiguration as unknown as Record<0 | 1, SampleBag>;

export function getSampleBagId(value: string | undefined): 0 | 1 | null {
  if (value === "0" || value === "1") return Number(value) as 0 | 1;
  return null;
}
