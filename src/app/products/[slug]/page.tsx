import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToQuote } from "./AddToQuote";
import { ProductVisual } from "@/components/ProductVisual";
import { getProduct, products } from "@/data/products";
export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{slug: string}> }): Promise<Metadata> { const product = getProduct((await params).slug); return { title: product?.name ?? "Product" }; }
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug); if (!product) notFound();
  return <div className="container page-shell"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/products">Products</Link><span>/</span><span>{product.name}</span></nav><div className="detail-grid"><ProductVisual product={product} /><div className="detail-copy"><span className="eyebrow blue">Sealant product</span><h1>{product.name}</h1>{product.displayColour && <p className="lead">Colour: {product.displayColour}</p>}<div className="fact-row"><span>Carton size</span><strong>{product.cartonSize} cartridges</strong></div><p className="verification-note">Technical specifications, formulation and compatibility claims will appear here after owner approval.</p><AddToQuote product={product} /></div></div><section className="reserved-section"><h2>Product information</h2><p>Verified product documentation is pending. No performance or specialist-use claims are published.</p></section></div>;
}
