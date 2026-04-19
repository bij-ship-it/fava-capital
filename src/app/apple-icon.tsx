import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const bars = [
    { left: 28, top: 40, height: 100, color: "#C4B5FD" },
    { left: 58, top: 60, height: 80, color: "#A78BFA" },
    { left: 88, top: 24, height: 116, color: "#8B5CF6" },
    { left: 118, top: 64, height: 76, color: "#6B3FA0" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0C0716",
          position: "relative",
        }}
      >
        {bars.map((bar) => (
          <div
            key={bar.left}
            style={{
              position: "absolute",
              left: bar.left,
              top: bar.top,
              width: 20,
              height: bar.height,
              background: bar.color,
              borderRadius: 3,
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            left: 28,
            top: 86,
            width: 112,
            height: 6,
            background: "#D4A843",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
