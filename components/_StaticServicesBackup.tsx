// Backup of the original static-PNG Services page (replaced by the live build
// in app/services/page.tsx). Kept for reference / rollback. Not routed.
import DesignAssetPage from "@/components/DesignAssetPage";
import servicesAsset from "@/designAssets/Services (Bento) - Growth Supercharge.png";

export default function StaticServicesBackup() {
  return (
    <DesignAssetPage
      asset={servicesAsset}
      alt="Growth Supercharge services page design"
      hotspots={[
        { href: "/", label: "Home", x: 499, y: 28, width: 42, height: 22 },
        { href: "/services", label: "Services", x: 568, y: 28, width: 62, height: 22 },
        { href: "/about", label: "About Us", x: 662, y: 28, width: 68, height: 22 },
        { href: "/contact", label: "Contact", x: 764, y: 28, width: 60, height: 22 },
        { href: "/contact", label: "Book Consultation", x: 1049, y: 17, width: 165, height: 38 },
        { href: "/contact", label: "Book Consultation", x: 979, y: 1148, width: 197, height: 47 },
        { href: "/contact", label: "Book a Dashboard Consultation", x: 65, y: 2815, width: 294, height: 60 },
      ]}
    />
  );
}
