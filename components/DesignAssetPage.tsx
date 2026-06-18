import type { CSSProperties } from "react";
import type { StaticImageData } from "next/image";

type Crop = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type Hotspot = {
  href: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

type DesignAssetPageProps = {
  asset: StaticImageData;
  alt: string;
  crop?: Crop;
  hotspots?: Hotspot[];
};

export default function DesignAssetPage({
  asset,
  alt,
  crop,
  hotspots = [],
}: DesignAssetPageProps) {
  const frame = crop ?? {
    x: 0,
    y: 0,
    width: asset.width,
    height: asset.height,
  };

  const imageStyle: CSSProperties = crop
    ? {
        left: `${-(frame.x / frame.width) * 100}%`,
        top: `${-(frame.y / frame.height) * 100}%`,
        width: `${(asset.width / frame.width) * 100}%`,
      }
    : {};

  return (
    <div className="design-asset-page">
      <div
        className={"design-asset-frame" + (crop ? " design-asset-frame--crop" : "")}
        style={
          {
            "--asset-frame-width": `${frame.width}px`,
            aspectRatio: crop ? `${frame.width} / ${frame.height}` : undefined,
          } as CSSProperties
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="design-asset-image"
          src={asset.src}
          width={asset.width}
          height={asset.height}
          alt={alt}
          style={imageStyle}
        />
        {hotspots.map((hotspot) => (
          <a
            key={`${hotspot.href}-${hotspot.label}`}
            className="design-asset-hotspot"
            href={hotspot.href}
            aria-label={hotspot.label}
            style={{
              left: `${(hotspot.x / frame.width) * 100}%`,
              top: `${(hotspot.y / frame.height) * 100}%`,
              width: `${(hotspot.width / frame.width) * 100}%`,
              height: `${(hotspot.height / frame.height) * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
