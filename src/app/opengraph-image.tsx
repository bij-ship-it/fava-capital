import { ImageResponse } from "next/og";

export const alt = "FAVA Capital — A connected financial ecosystem.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(
    / /g,
    "+",
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (
    await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
    })
  ).text();
  const match = css.match(/src:\s*url\(([^)]+)\)\s*format\(['"]([^'"]+)['"]\)/);
  if (!match) throw new Error(`could not resolve ${family} font URL`);
  const fontRes = await fetch(match[1]);
  if (!fontRes.ok) {
    throw new Error(
      `failed to fetch font binary for ${family}: ${fontRes.status}`,
    );
  }
  return fontRes.arrayBuffer();
}

export default async function OpengraphImage() {
  const headline = "A connected financial ecosystem.";
  const brandLabel = "FAVA CAPITAL";
  const sub = "Invest · Trade · Pay · Hold · Hedge";

  const [frauncesBold, jetbrainsMedium] = await Promise.all([
    loadFont(
      "Fraunces",
      700,
      headline + "— ' \u2019" + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz .",
    ),
    loadFont(
      "JetBrains Mono",
      500,
      (brandLabel + sub).toUpperCase() + " ·" + "FAVACAPITAL.COM",
    ),
  ]);

  const bars = [
    { left: 100, top: 170, height: 260, color: "#C4B5FD" },
    { left: 152, top: 220, height: 210, color: "#A78BFA" },
    { left: 204, top: 130, height: 300, color: "#8B5CF6" },
    { left: 256, top: 230, height: 200, color: "#6B3FA0" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0D0B14",
          position: "relative",
          padding: "80px 100px",
          fontFamily: '"Fraunces"',
        }}
      >
        {/* Violet glow behind the lattice */}
        <div
          style={{
            position: "absolute",
            left: 20,
            top: 80,
            width: 400,
            height: 400,
            background:
              "radial-gradient(closest-side, rgba(139,92,246,0.35) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Top-left brand label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#9C90B4",
            fontFamily: '"JetBrains Mono"',
            fontSize: 20,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 36,
              height: 2,
              background: "#D9B166",
            }}
          />
          {brandLabel}
        </div>

        {/* Main content row */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            marginTop: 40,
            gap: 64,
          }}
        >
          {/* Lattice mark */}
          <div
            style={{
              position: "relative",
              width: 300,
              height: 320,
              flexShrink: 0,
              display: "flex",
            }}
          >
            {bars.map((bar) => (
              <div
                key={bar.left}
                style={{
                  position: "absolute",
                  left: bar.left - 100,
                  top: bar.top - 130,
                  width: 32,
                  height: bar.height,
                  background: bar.color,
                  borderRadius: 6,
                }}
              />
            ))}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 130,
                width: 196,
                height: 10,
                background: "#D9B166",
                borderRadius: 3,
              }}
            />
          </div>

          {/* Headline + sub */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              flex: 1,
            }}
          >
            <div
              style={{
                color: "#E8E4EC",
                fontSize: 88,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontWeight: 700,
                fontFamily: '"Fraunces"',
                fontStyle: "italic",
              }}
            >
              {headline}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                color: "#9C90B4",
                fontFamily: '"JetBrains Mono"',
                fontSize: 22,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {sub.split(" · ").map((word, i, arr) => (
                <div key={word} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <div>{word}</div>
                  {i < arr.length - 1 && (
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        background: "#D9B166",
                        borderRadius: 2,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gold rule */}
        <div
          style={{
            position: "absolute",
            left: 100,
            right: 100,
            bottom: 60,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, #D9B166, transparent)",
          }}
        />

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            left: 100,
            bottom: 30,
            color: "#6E6388",
            fontFamily: '"JetBrains Mono"',
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          favacapital.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: frauncesBold,
          weight: 700,
          style: "italic",
        },
        {
          name: "JetBrains Mono",
          data: jetbrainsMedium,
          weight: 500,
          style: "normal",
        },
      ],
    },
  );
}
