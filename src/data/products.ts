export type Product = { slug: string; name: string; displayColour?: string; cartonSize: 25; image?: string };
export const products: Product[] = [
  { slug: "mm-plus-clear", name: "MM Plus Clear", displayColour: "Clear / transparent", cartonSize: 25 },
  { slug: "mm-brown", name: "MM Brown", cartonSize: 25 },
  { slug: "mm-white", name: "MM White", cartonSize: 25 },
  { slug: "mm-clear", name: "MM Clear", displayColour: "Clear / transparent", cartonSize: 25 },
  { slug: "mm-black", name: "MM Black", cartonSize: 25 },
  { slug: "mm-clear-black", name: "MM Clear Black", cartonSize: 25 },
];
export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
export const cartridgesForCartons = (cartons: number) => Math.max(0, Math.floor(cartons)) * 25;
