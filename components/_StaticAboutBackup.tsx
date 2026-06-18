// Backup of the original static-PNG About page (replaced by the live build in
// app/about/page.tsx). Kept for reference / rollback. Not routed.
import DesignAssetPage from "@/components/DesignAssetPage";
import aboutAsset from "@/designAssets/About us (Bento) - Growth Supercharge.png";

export default function StaticAboutBackup() {
  return (
    <DesignAssetPage
      asset={aboutAsset}
      alt="Growth Supercharge about us page design"
      crop={{ x: 106, y: 1581, width: 1283, height: 4311 }}
      hotspots={[
        { href: "/", label: "Home", x: 500, y: 28, width: 42, height: 22 },
        { href: "/services", label: "Services", x: 570, y: 28, width: 62, height: 22 },
        { href: "/about", label: "About Us", x: 662, y: 28, width: 68, height: 22 },
        { href: "/contact", label: "Contact", x: 764, y: 28, width: 60, height: 22 },
        { href: "/contact", label: "Book Consultation", x: 1049, y: 17, width: 165, height: 38 },
        { href: "/contact", label: "Book a Consultation", x: 554, y: 3527, width: 176, height: 47 },
      ]}
    />
  );
}
