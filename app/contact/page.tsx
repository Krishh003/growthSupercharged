import type { Metadata } from "next";
import DesignAssetPage from "@/components/DesignAssetPage";
import contactAsset from "@/designAssets/Growth Supercharged _ Contact.jpg";

export const metadata: Metadata = {
  title: "Contact — Start Your Growth Journey | Growth Supercharge",
  description:
    "High-stakes strategy meets rapid acceleration. Secure your competitive advantage by booking a direct consultation with our lead growth architects.",
};

export default function Contact() {
  return (
    <DesignAssetPage
      asset={contactAsset}
      alt="Growth Supercharge contact page design"
      hotspots={[
        { href: "/", label: "Home", x: 500, y: 30, width: 42, height: 25 },
        { href: "/services", label: "Services", x: 570, y: 30, width: 62, height: 25 },
        { href: "/about", label: "About Us", x: 662, y: 30, width: 68, height: 25 },
        { href: "/contact", label: "Contact", x: 758, y: 30, width: 60, height: 25 },
        { href: "/contact", label: "Book Consultation", x: 1054, y: 17, width: 166, height: 39 },
      ]}
    />
  );
}
