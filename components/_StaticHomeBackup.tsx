// Backup of the original static-PNG Home (replaced by the live component build
// in app/page.tsx). Kept for reference / quick rollback. Not routed.
import DesignAssetPage from "@/components/DesignAssetPage";
import homeAsset from "@/designAssets/Home (Bento) - Growth Supercharge.png";

export default function StaticHomeBackup() {
  return (
    <DesignAssetPage
      asset={homeAsset}
      alt="Growth Supercharge home page design"
      hotspots={[
        { href: "/", label: "Home", x: 484, y: 18, width: 42, height: 22 },
        { href: "/services", label: "Services", x: 560, y: 18, width: 58, height: 22 },
        { href: "/about", label: "About Us", x: 647, y: 18, width: 62, height: 22 },
        { href: "/contact", label: "Contact", x: 736, y: 18, width: 58, height: 22 },
        { href: "/contact", label: "Book Consultation", x: 1045, y: 13, width: 170, height: 38 },
        { href: "/services", label: "Explore Services", x: 130, y: 620, width: 170, height: 52 },
        { href: "/contact", label: "Book a Consultation", x: 499, y: 3295, width: 280, height: 72 },
      ]}
    />
  );
}
