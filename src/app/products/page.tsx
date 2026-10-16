"use client";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
export default function ProductsPage() {
  const [query, setQuery] = useState(""); const results = useMemo(() => products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase().trim())), [query]);
  return <div className="container page-shell"><span className="eyebrow blue">Product catalogue</span><h1>MM sealant range</h1><p className="page-intro">Browse all six products. Product specifications remain hidden until supporting documentation is approved.</p><label className="search-field"><Search size={20} /><span className="sr-only">Search products</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by product name" /></label><p className="results-count" aria-live="polite">{results.length} {results.length === 1 ? "product" : "products"}</p>{results.length ? <div className="product-grid">{results.map((product) => <ProductCard key={product.slug} product={product} />)}</div> : <div className="empty-state"><h2>No products found</h2><p>Try another product name or clear your search.</p><button className="button button-secondary" onClick={() => setQuery("")}>Clear search</button></div>}</div>;
}
