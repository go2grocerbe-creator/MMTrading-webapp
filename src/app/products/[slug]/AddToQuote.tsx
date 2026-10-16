"use client";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/data/products";
import { cartridgesForCartons } from "@/data/products";
import { useQuote } from "@/components/QuoteProvider";
export function AddToQuote({ product }: { product: Product }) {
  const [cartons, setCartons] = useState(1); const { items, addItem } = useQuote(); const selected = items.some((item) => item.slug === product.slug);
  return <div className="quote-control"><label htmlFor="cartons">Cartons</label><div><input id="cartons" type="number" min="1" value={cartons} onChange={(event) => setCartons(Math.max(1, Number(event.target.value)))} /><span>= {cartridgesForCartons(cartons)} cartridges</span></div><button className="button button-primary" onClick={() => addItem(product.slug, cartons)}>{selected ? "Update quote selection" : "Add to quote"}</button>{selected && <Link className="text-link" href="/quote">View quote request</Link>}</div>;
}
