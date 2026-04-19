"use client";

import { motion } from "framer-motion";
import { CHANNELS_LIST } from "@/lib/channels";

const loops = [
  {
    number: "01",
    title: "One platform for every financial need.",
    description:
      "Invest, trade, move money, hold digital assets, access commodities &mdash; all under one FAVA login. The products are connected so you don't have to be.",
  },
  {
    number: "02",
    title: "One view of your money.",
    description:
      "Your capital, positions, and activity in one place. See your full exposure across markets and products without juggling five platforms, five logins, five statements.",
  },
  {
    number: "03",
    title: "More you use, more you get.",
    description:
      "Fund your trading from your wealth account. Hedge digital holdings on Markets. Move capital across borders in minutes. Every product makes the others work harder for you.",
  },
];

export function Flywheel() {
  return (
    <div className="grid grid-cols-12 gap-12 items-start">
      <div className="col-span-12 lg:col-span-5">
        <FlywheelDiagram />
      </div>

      <div className="col-span-12 lg:col-span-7 flex flex-col gap-10">
        {loops.map((loop, i) => (
          <motion.div
            key={loop.number}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="grid grid-cols-[auto_1fr] gap-6"
          >
            <p className="text-numbers text-gold">{loop.number}</p>
            <div>
              <h3 className="text-subhead text-primary">{loop.title}</h3>
              <p className="text-secondary mt-3 leading-[1.7]">
                {loop.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FlywheelDiagram() {
  const size = 360;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 130;
  const nodeRadius = 34;

  const positions = CHANNELS_LIST.map((_, i) => {
    const angle = (i / CHANNELS_LIST.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: cx + Math.cos(angle) * radius,
      y: cy + Math.sin(angle) * radius,
      angle,
    };
  });

  return (
    <div className="relative">
      <motion.svg
        width="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ring" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#C4A265" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        <motion.circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="url(#ring)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />

        <circle
          cx={cx}
          cy={cy}
          r={radius - 20}
          fill="none"
          stroke="#1E1735"
          strokeWidth="1"
          strokeDasharray="2 4"
        />

        {positions.map((pos, i) => {
          const next = positions[(i + 1) % positions.length];
          return (
            <motion.path
              key={`arrow-${i}`}
              d={describeArc(cx, cy, radius, pos.angle, next.angle)}
              fill="none"
              stroke="#C4A265"
              strokeWidth="1"
              strokeOpacity="0.35"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
            />
          );
        })}

        {CHANNELS_LIST.map((channel, i) => {
          const { x, y } = positions[i];
          return (
            <motion.g
              key={channel.slug}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
            >
              <circle
                cx={x}
                cy={y}
                r={nodeRadius}
                fill="#120E1E"
                stroke={channel.color}
                strokeWidth="1"
              />
              <circle cx={x} cy={y} r={3} fill={channel.color} />
              <text
                x={x}
                y={y + nodeRadius + 18}
                textAnchor="middle"
                className="fill-primary"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {channel.shortName}
              </text>
            </motion.g>
          );
        })}

        <g>
          <circle
            cx={cx}
            cy={cy}
            r={28}
            fill="#0C0716"
            stroke="#C4A265"
            strokeWidth="1"
          />
          <text
            x={cx}
            y={cy + 4}
            textAnchor="middle"
            className="fill-gold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.1em",
            }}
          >
            FAVA
          </text>
        </g>
      </motion.svg>
    </div>
  );
}

function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angle: number,
) {
  return {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
  };
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
) {
  let end = endAngle;
  if (end <= startAngle) end += Math.PI * 2;
  const inset = 0.12;
  const from = polarToCartesian(cx, cy, r, startAngle + inset);
  const to = polarToCartesian(cx, cy, r, end - inset);
  const largeArc = end - startAngle > Math.PI ? 1 : 0;
  return `M ${from.x} ${from.y} A ${r} ${r} 0 ${largeArc} 1 ${to.x} ${to.y}`;
}
