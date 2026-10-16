"use client";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { useQuote } from "./QuoteProvider";
import { ProductVisual } from "./ProductVisual";
export function ProductCard({ product }: { product: Product }) {
  const { items, addItem } = useQuote(); const selected = items.some((item) => item.slug === product.slug);
  return <article className="product-card"><Link href={"/products/" + product.slug} className="card-visual-link"><ProductVisual product={product} compact /></Link><span className="eyebrow blue">Sealant product</span><h3><Link href={"/products/" + product.slug}>{product.name}</Link></h3>{product.displayColour && <p>Colour: {product.displayColour}</p>}<strong>{product.cartonSize} cartridges / carton</strong><div className="card-actions"><Link className="text-link" href={"/products/" + product.slug}>View product <ArrowRight size={15} /></Link><button className="icon-action" onClick={() => addItem(product.slug)} disabled={selected}><Plus size={15} /> {selected ? "Added" : "Add to quote"}</button></div></article>;
}
