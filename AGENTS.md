# MM Trading Website — Agent Operating Instructions

## Mission
Build a responsive B2B wholesale catalogue and quotation website. Work autonomously: install dependencies, create folders, implement code, run tests, fix failures, and report evidence. Never hand the user routine terminal steps or manual file manipulation that the agent can execute.

## Sources of truth
1. Approved MM Trading decisions and product handoff (17 September 2026).
2. Figma V2 designs in https://www.figma.com/design/Iitp1H5FNNTah1Vhp3dtPs/MM-Brand-Wholesale-Website-UI?node-id=18-2
3. MM Trading Website Project OS: https://app.notion.com/p/3ab1600b77dd81eeaf2cedab357da078
4. This repository and its documentation.

Read project-specific assets if available. Request missing content only if an actual decision or access permission is required. Do not fabricate business facts.

## Environment and autonomous setup
Target Windows local workspace: `E:\MM Trading\MMTrading-webapp`.
Git remote: `https://github.com/go2grocerbe-creator/MMTrading-webapp.git`.
If running on Tofail's PC with terminal permissions: inspect the folder and installed software; install or bootstrap missing development tools when allowed; clone the repository if not cloned; initialize Next.js + TypeScript + Tailwind + ESLint if empty; install dependencies and run locally. Check Git status before changes. If the directory already contains work, preserve it. If terminal access, installer permissions, or authentication are blocked, report the precise blocker; do not claim completion.

## Product and functional scope
Six independent products: MM Plus Clear, MM Brown, MM White, MM Clear, MM Black, MM Clear Black. Each carton contains 25 cartridges. Build Home, Products, Product Detail, About, Request Quote and Contact, plus error/success and loading/empty states. Implement reusable product data, search/filtering, responsive layout, product-level enquiry, multi-product quotation selection, and carton calculation.

DO NOT implement ERP, accounts, online checkout, payments, live stock, retail pricing, or unnecessary CMS/backend infrastructure.

## Pending verification — do not publish as fact
The formulation of MM Brown, MM White and MM Black is disputed between front and back labels. MM Clear Black's actual sealant colour is unconfirmed. Net quantities, MM Plus Clear versus MM Clear performance differences, certification, surface compatibility and specialist-use claims require evidence. The logo, approved company copy, public contact details, actual RFQ destination and final imagery are pending. Store these fields as optional or hidden until approved. Never invent certifications, testimonials, contact details, history, performance claims, or product imagery. Use real supplied photographs where available and preserve labels.

## Technology
Prefer a lightweight Next.js App Router / TypeScript / Tailwind frontend. Use a typed product model and replaceable `public/images/brand` and `public/images/products` assets. Centralize site configuration and public-facing copy. Backend form delivery must be server-side and configured via environment variables, with validation, spam mitigation and explicit success/failure states. Never commit secrets. Do not send actual messages to customers or suppliers without approval.

## Figma and verification
Use connected Figma tooling and relevant design-to-code skills if available. Preserve Figma V1; implement the V2 direction and inspect screenshots, including mobile. Verify at 320, 375, 390, 430, 768 and 1280px. Check no horizontal overflow, hero overlap, broken images, dead CTAs, fake links, missing product records or unsupported facts. Test product selection, 1 carton = 25 cartridges, form validation, response states, accessibility basics, build/lint and runtime errors. Collect screenshots or logs as evidence, and never claim something was tested when it wasn't.

## Git workflow and handoff
Prefer small commits with descriptive messages. Keep the default branch stable; use a feature branch for significant work. On each run, inspect existing changes and avoid overwriting work. Once development begins, report: actual files changed, working local or preview URL if verified, tests actually executed, remaining blockers and next action. Do not deploy publicly, purchase services, or change repository visibility without user approval.

## First execution mission
1. Audit repository and local tool availability.
2. Bootstrap the project autonomously if needed.
3. Build the reusable design foundation, header/footer, homepage responsive layout, and typed six-product dataset.
4. Run and visually inspect the app at desktop and mobile breakpoints.
5. Commit and report evidence. Then proceed with product detail and quotation implementation only after the first milestone passes.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
