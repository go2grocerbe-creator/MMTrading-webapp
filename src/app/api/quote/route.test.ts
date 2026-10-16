import { describe, expect, it } from "vitest";
import { validateQuote } from "./route";
const valid = { name: "Buyer", email: "buyer@example.com", company: "Example Ltd", destination: "Dhaka", website: "", items: [{ slug: "mm-clear", cartons: 2 }] };
describe("quote validation", () => { it("accepts a complete quotation", () => expect(validateQuote(valid)).toBeNull()); it("rejects empty selections", () => expect(validateQuote({ ...valid, items: [] })).toMatch(/Select/)); it("rejects unknown products", () => expect(validateQuote({ ...valid, items: [{ slug: "unknown", cartons: 1 }] })).toMatch(/invalid/)); it("rejects honeypot submissions", () => expect(validateQuote({ ...valid, website: "spam" })).toMatch(/rejected/)); });
