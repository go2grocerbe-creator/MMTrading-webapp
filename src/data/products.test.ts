import { describe, expect, it } from "vitest";
import { cartridgesForCartons, products } from "./products";
describe("product data", () => { it("contains the six independent products", () => { expect(products).toHaveLength(6); expect(new Set(products.map((p) => p.slug)).size).toBe(6); }); it("calculates 25 cartridges per carton", () => { expect(cartridgesForCartons(1)).toBe(25); expect(cartridgesForCartons(4)).toBe(100); }); });
