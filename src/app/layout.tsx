import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { QuoteProvider } from "@/components/QuoteProvider";
import "./globals.css";
export const metadata: Metadata = { title: { default: "MM Brand | Trade sealants", template: "%s | MM Brand" }, description: "Explore the MM sealant range and prepare a wholesale quotation request." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><QuoteProvider><Header /><main>{children}</main><Footer /></QuoteProvider></body></html>; }
