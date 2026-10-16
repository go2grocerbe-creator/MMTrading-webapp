import { NextResponse } from "next/server";
import { products } from "../../../data/products";
type Payload = { name?: unknown; email?: unknown; company?: unknown; destination?: unknown; notes?: unknown; website?: unknown; items?: unknown };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function validateQuote(payload: Payload) {
  if (payload.website) return "Request rejected.";
  if (![payload.name, payload.email, payload.company, payload.destination].every((value) => typeof value === "string" && value.trim().length > 0)) return "Complete all required fields.";
  if (!emailPattern.test(String(payload.email))) return "Enter a valid email address.";
  if (!Array.isArray(payload.items) || payload.items.length === 0) return "Select at least one product.";
  const validSlugs = new Set(products.map(({ slug }) => slug));
  if (!payload.items.every((item) => item && typeof item === "object" && "slug" in item && "cartons" in item && validSlugs.has(String(item.slug)) && Number.isInteger(item.cartons) && Number(item.cartons) > 0)) return "The product selection is invalid.";
  return null;
}
export async function POST(request: Request) {
  let payload: Payload; try { payload = await request.json(); } catch { return NextResponse.json({ error: "Invalid request body." }, { status: 400 }); }
  const error = validateQuote(payload); if (error) return NextResponse.json({ error }, { status: 400 });
  const destination = process.env.QUOTE_WEBHOOK_URL;
  if (!destination) return NextResponse.json({ error: "Online submission is not configured yet. Your request has not been sent." }, { status: 503 });
  try { const response = await fetch(destination, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), signal: AbortSignal.timeout(10000) }); if (!response.ok) throw new Error("Destination rejected request"); return NextResponse.json({ ok: true }); }
  catch { return NextResponse.json({ error: "The request could not be delivered. Please try again later." }, { status: 502 }); }
}
