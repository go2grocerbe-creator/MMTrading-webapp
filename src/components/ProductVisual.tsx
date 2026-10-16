import type { Product } from "@/data/products";
export function ProductVisual({ product, compact = false }: { product: Product; compact?: boolean }) {
  // Approved owner assets are local, replaceable paths; dimensions vary by supplied pack shot.
  // eslint-disable-next-line @next/next/no-img-element
  if (product.image) return <img className="product-photo" src={product.image} alt={product.name + " cartridge"} />;
  return <div className={compact ? "product-visual compact" : "product-visual"} role="img" aria-label={product.name + " product image pending approval"}><div className="cartridge-placeholder"><span>MM</span><small>{product.name.replace("MM ", "")}</small></div><span className="pending-image">Product image pending</span></div>;
}
