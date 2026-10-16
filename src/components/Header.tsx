"use client";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useQuote } from "./QuoteProvider";
const links = [["Products", "/products"], ["Wholesale", "/quote"], ["About", "/about"], ["Contact", "/contact"]];
export function Header() {
  const [open, setOpen] = useState(false); const { items } = useQuote();
  return <header className="site-header"><div className="header-inner"><Link className="brand" href="/" aria-label="MM Brand home">MM Brand</Link><button className="menu-button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}><span className="sr-only">{open ? "Close menu" : "Open menu"}</span>{open ? <X /> : <Menu />}</button><nav id="site-nav" className={open ? "nav open" : "nav"} aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="button button-primary nav-quote" href="/quote" onClick={() => setOpen(false)}><ShoppingBag size={16} aria-hidden /> Request a quote {items.length > 0 && <span className="quote-count">{items.length}</span>}</Link></nav></div></header>;
}
