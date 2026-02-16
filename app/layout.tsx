import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sula Cleaning Services | House & Airbnb Cleaning in Broward, Miami & Palm Beach",
  description:
    "Professional cleaning services for houses, apartments, offices and Airbnb turnovers in Broward, Palm Beach & Miami-Dade. Bilingual (EN/ES). Book your cleaning by appointment.",
  metadataBase: new URL("https://example.vercel.app"),
  openGraph: {
    title: "Sula Cleaning Services | House & Airbnb Cleaning in Broward, Miami & Palm Beach",
    description:
      "Professional cleaning services in South Florida. Book your cleaning by appointment. English & Español.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
