import { expect, test } from "@playwright/test";

const widths = [320, 375, 390, 430, 768, 1280];

for (const width of widths) {
  test(`home renders without horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width < 600 ? 844 : 900 });
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page.getByRole("heading", { name: /Professional Sealants/ })).toBeVisible();
    await expect(page.locator(".product-card")).toHaveCount(6);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
    await page.screenshot({ path: `test-results/home-${width}.png`, fullPage: true });
  });
}

test("mobile navigation opens and reaches products", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("navigation").getByRole("link", { name: "Products" }).click();
  await expect(page).toHaveURL(/\/products$/);
  await expect(page.getByText("6 products")).toBeVisible();
});

test("search, empty state, product selection and carton calculation work", async ({ page }) => {
  await page.goto("/products");
  await page.getByPlaceholder("Search by product name").fill("Plus");
  await expect(page.locator(".product-card")).toHaveCount(1);
  await page.getByPlaceholder("Search by product name").fill("not-a-product");
  await expect(page.getByRole("heading", { name: "No products found" })).toBeVisible();
  await page.getByRole("button", { name: "Clear search" }).click();
  await page.locator(".product-card").first().getByRole("link", { name: "View product" }).click();
  await page.getByLabel("Cartons").fill("3");
  await expect(page.getByText("= 75 cartridges")).toBeVisible();
  await page.getByRole("button", { name: "Add to quote" }).click();
  await page.getByRole("link", { name: "View quote request" }).click();
  await expect(page.getByText("75 cartridges")).toBeVisible();
});

test("quote validates fields and reports unconfigured delivery honestly", async ({ page }) => {
  await page.goto("/products/mm-clear");
  await page.getByRole("button", { name: "Add to quote" }).click();
  await page.goto("/quote");
  await page.getByRole("button", { name: "Submit quote request" }).click();
  const name = page.getByLabel(/Full name/);
  await expect(name).toBeFocused();
  await name.fill("Test Buyer");
  await page.getByLabel(/Work email/).fill("buyer@example.com");
  await page.getByLabel(/Company name/).fill("Test Company");
  await page.getByLabel(/Destination/).fill("Dhaka");
  await page.getByRole("button", { name: "Submit quote request" }).click();
  await expect(page.locator(".form-error")).toContainText("Online submission is not configured yet");
});

test("all navigation destinations and product detail routes resolve", async ({ page }) => {
  for (const path of ["/", "/products", "/about", "/contact", "/quote", "/products/mm-plus-clear", "/products/mm-brown", "/products/mm-white", "/products/mm-clear", "/products/mm-black", "/products/mm-clear-black"]) {
    const response = await page.goto(path);
    expect(response?.status(), path).toBe(200);
    await expect(page.locator("body")).not.toContainText("Application error");
  }
});
