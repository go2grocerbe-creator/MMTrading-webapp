"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
export type QuoteItem = { slug: string; cartons: number };
type QuoteContextValue = { items: QuoteItem[]; addItem: (slug: string, cartons?: number) => void; updateItem: (slug: string, cartons: number) => void; removeItem: (slug: string) => void; clear: () => void };
const QuoteContext = createContext<QuoteContextValue | null>(null);
const STORAGE_KEY = "mm-trading-quote";
export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]); const [ready, setReady] = useState(false);
  useEffect(() => { queueMicrotask(() => { try { const stored = window.localStorage.getItem(STORAGE_KEY); if (stored) setItems(JSON.parse(stored)); } catch {} setReady(true); }); }, []);
  useEffect(() => { if (ready) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); }, [items, ready]);
  const addItem = useCallback((slug: string, cartons = 1) => setItems((current) => current.some((item) => item.slug === slug) ? current.map((item) => item.slug === slug ? { ...item, cartons: Math.max(1, cartons) } : item) : [...current, { slug, cartons: Math.max(1, cartons) }]), []);
  const updateItem = useCallback((slug: string, cartons: number) => setItems((current) => current.map((item) => item.slug === slug ? { ...item, cartons: Math.max(1, Math.floor(cartons) || 1) } : item)), []);
  const removeItem = useCallback((slug: string) => setItems((current) => current.filter((item) => item.slug !== slug)), []);
  const clear = useCallback(() => setItems([]), []);
  const value = useMemo(() => ({ items, addItem, updateItem, removeItem, clear }), [items, addItem, updateItem, removeItem, clear]);
  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}
export function useQuote() { const value = useContext(QuoteContext); if (!value) throw new Error("useQuote must be used inside QuoteProvider"); return value; }
