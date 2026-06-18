import type { Metadata } from "next";
import "./globals.css";
import { satoshi, dmSans } from "./fonts";

export const metadata: Metadata = {
  title: "Growth Supercharge — Build the Systems Behind Business Growth",
  description:
    "Growth Supercharge helps businesses create reporting systems, analytics dashboards, growth infrastructure, and operational frameworks that enable smarter decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${dmSans.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
