export type Product = { id: string; name: string; description: string; application: string; ingredients: string };
export type SampleBag = { id: 0 | 1; products: [Product, Product] };

export const sampleBags: Record<0 | 1, SampleBag> = {
  0: { id: 0, products: [
    { id: "product-0", name: "Produkt 1", description: "Dein persönlicher Begleiter für unterwegs.", application: "[Anwendungshinweise für Produkt 1]", ingredients: "[Inhaltsstoffe und Hinweise für Produkt 1]" },
    { id: "product-1", name: "Produkt 2", description: "Ein kleiner Moment, der ganz dir gehört.", application: "[Anwendungshinweise für Produkt 2]", ingredients: "[Inhaltsstoffe und Hinweise für Produkt 2]" },
  ] },
  1: { id: 1, products: [
    { id: "product-2", name: "Produkt 3", description: "Dein persönlicher Begleiter für unterwegs.", application: "[Anwendungshinweise für Produkt 3]", ingredients: "[Inhaltsstoffe und Hinweise für Produkt 3]" },
    { id: "product-3", name: "Produkt 4", description: "Ein kleiner Moment, der ganz dir gehört.", application: "[Anwendungshinweise für Produkt 4]", ingredients: "[Inhaltsstoffe und Hinweise für Produkt 4]" },
  ] },
};

export function getSampleBagId(value: string | undefined): 0 | 1 | null {
  if (value === "0" || value === "1") return Number(value) as 0 | 1;
  return null;
}
