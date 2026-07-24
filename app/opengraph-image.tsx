import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sudharsan GS — Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#f5f6f8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#3b66c8",
            }}
          >
            Product Engineer
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#1a1f2e",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            SUDHARSAN GS
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "#5a6480",
              lineHeight: 1.4,
              maxWidth: "860px",
            }}
          >
            Full-stack product engineer — Fubo · FactoStack · Winuall
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "80px",
            fontSize: "16px",
            color: "#8a93a8",
            letterSpacing: "0.05em",
          }}
        >
          sudharsangs.in
        </div>
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "300px",
            height: "100%",
            background: "linear-gradient(135deg, #3b66c820 0%, #3b66c808 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
