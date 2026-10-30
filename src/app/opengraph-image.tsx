import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image de partage (Open Graph / Twitter) générée au build, au format 1200×630.
export const alt = "Intrastar — Déclaration EMEBI (ex-DEB) & état récapitulatif TVA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo_long_intrastar.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f7f8f6",
          borderTop: "16px solid #11827a",
          color: "#16201e",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={437} height={91} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, fontWeight: 600, color: "#11827a", marginBottom: 20 }}>
            EMEBI · État récapitulatif TVA
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
            Vos déclarations d&apos;échanges intra-UE, gérées de A à Z.
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#56635f" }}>intrastar.fr · Devis gratuit sous 48 h</div>
      </div>
    ),
    size,
  );
}
