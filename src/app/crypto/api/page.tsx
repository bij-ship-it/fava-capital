import type { Metadata } from "next";
import { ChannelBadge } from "@/components/ui/ChannelBadge";

export const metadata: Metadata = {
  title: "API Documentation — FAVA Digital | FAVA Capital",
  description:
    "RESTful and WebSocket APIs for programmatic trading. Low-latency market data, order management, and account operations.",
};

const rateLimits = [
  { endpoint: "Public Market Data", requests: "120 / min", burst: "10 / sec", auth: "None" },
  { endpoint: "Private Account", requests: "60 / min", burst: "5 / sec", auth: "API Key + Secret" },
  { endpoint: "Order Placement", requests: "30 / min", burst: "3 / sec", auth: "API Key + Secret" },
  { endpoint: "WebSocket Streams", requests: "Unlimited", burst: "N/A", auth: "API Key (optional)" },
];

const restExample = `// Fetch order book
const response = await fetch(
  "https://api.cryptorio.exchange/v1/orderbook/BTC-USD",
  {
    headers: {
      "X-API-Key": "your_api_key",
      "X-API-Signature": signature,
      "X-API-Timestamp": timestamp,
    },
  }
);

const orderbook = await response.json();
// {
//   "bids": [["67430.20", "0.4521"], ...],
//   "asks": [["67435.00", "0.3210"], ...],
//   "timestamp": 1714000000000
// }`;

const wsExample = `// Subscribe to real-time trades
const ws = new WebSocket(
  "wss://stream.cryptorio.exchange/v1"
);

ws.onopen = () => {
  ws.send(JSON.stringify({
    "method": "subscribe",
    "channels": ["trades.BTC-USD", "orderbook.BTC-USD"],
  }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(data);
  // {
  //   "channel": "trades.BTC-USD",
  //   "price": "67432.18",
  //   "size": "0.0500",
  //   "side": "buy",
  //   "timestamp": 1714000000123
  // }
};`;

const placeOrderExample = `// Place a limit order
const body = JSON.stringify({
  "pair": "BTC-USD",
  "side": "buy",
  "type": "limit",
  "price": "67400.00",
  "size": "0.1000",
  "time_in_force": "GTC",
});

const response = await fetch(
  "https://api.cryptorio.exchange/v1/orders",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": "your_api_key",
      "X-API-Signature": signature,
      "X-API-Timestamp": timestamp,
    },
    body,
  }
);

const order = await response.json();
// {
//   "id": "ord_8f3k2j1...",
//   "status": "open",
//   "pair": "BTC-USD",
//   "side": "buy",
//   "price": "67400.00",
//   "size": "0.1000"
// }`;

const authHeaders = `X-API-Key: your_api_key
X-API-Signature: HMAC-SHA256(timestamp + method + path + body, api_secret)
X-API-Timestamp: 1714000000`;

export default function APIPage() {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        {/* Header */}
        <ChannelBadge name="FAVA DIGITAL" color="#6366F1" />
        <h1 className="text-display-alt text-primary mb-6">API Documentation</h1>
        <p className="text-secondary max-w-[560px] mb-20">
          Programmatic access to FAVA Digital&apos;s trading engine. Build bots,
          integrate market data, and manage your portfolio through our RESTful
          and WebSocket APIs.
        </p>

        {/* Authentication */}
        <section className="py-[140px] border-t border-border">
          <p className="text-label text-secondary mb-10">02 — Authentication</p>
          <p className="text-secondary text-[14px] mb-6 max-w-[560px]">
            All private endpoints require HMAC-SHA256 signed requests. Generate your
            API key and secret from the account settings dashboard. Include the
            following headers with every authenticated request.
          </p>
          <div className="bg-surface border border-border p-5">
            <pre className="font-mono text-[13px] text-secondary leading-relaxed overflow-x-auto">
              <code>{authHeaders}</code>
            </pre>
          </div>
        </section>

        {/* REST API */}
        <section className="py-[140px] border-t border-border">
          <p className="text-label text-secondary mb-10">03 — REST API</p>
          <p className="text-secondary text-[14px] mb-8">
            Base URL:{" "}
            <code className="font-mono text-primary">https://api.cryptorio.exchange/v1</code>
          </p>

          {/* GET Orderbook */}
          <div className="mb-12">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-label text-green-400 text-[11px]">GET</span>
              <code className="text-primary text-[14px] font-mono">/orderbook/&#123;pair&#125;</code>
            </div>
            <div className="bg-surface border border-border">
              <div className="px-5 py-3 border-b border-border flex items-center justify-between">
                <span className="text-caption text-tertiary">JavaScript</span>
              </div>
              <pre className="p-5 text-[13px] font-mono text-secondary overflow-x-auto leading-relaxed">
                <code>{restExample}</code>
              </pre>
            </div>
          </div>

          {/* POST Order */}
          <div>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-label text-crypto text-[11px]">POST</span>
              <code className="text-primary text-[14px] font-mono">/orders</code>
            </div>
            <div className="bg-surface border border-border">
              <div className="px-5 py-3 border-b border-border flex items-center justify-between">
                <span className="text-caption text-tertiary">JavaScript</span>
              </div>
              <pre className="p-5 text-[13px] font-mono text-secondary overflow-x-auto leading-relaxed">
                <code>{placeOrderExample}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* WebSocket API */}
        <section className="py-[140px] border-t border-border">
          <p className="text-label text-secondary mb-10">04 — WebSocket API</p>
          <p className="text-secondary text-[14px] mb-8">
            Endpoint:{" "}
            <code className="font-mono text-primary">wss://stream.cryptorio.exchange/v1</code>
          </p>

          <div className="bg-surface border border-border">
            <div className="px-5 py-3 border-b border-border flex items-center justify-between">
              <span className="text-caption text-tertiary">JavaScript</span>
            </div>
            <pre className="p-5 text-[13px] font-mono text-secondary overflow-x-auto leading-relaxed">
              <code>{wsExample}</code>
            </pre>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="py-[140px] border-t border-border">
          <p className="text-label text-secondary mb-10">05 — Rate Limits</p>
          <p className="text-secondary text-[14px] mb-8">
            Rate limits are applied per API key. Exceeding limits returns HTTP 429.
          </p>

          <div className="border border-border">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 px-6 py-3 border-b border-border">
              <span className="text-caption text-tertiary">Endpoint</span>
              <span className="text-caption text-tertiary">Rate Limit</span>
              <span className="text-caption text-tertiary">Burst</span>
              <span className="text-caption text-tertiary">Auth</span>
            </div>

            {rateLimits.map((limit, i) => (
              <div
                key={limit.endpoint}
                className={`grid grid-cols-4 gap-4 px-6 py-4 border-b border-border last:border-b-0 ${
                  i % 2 === 1 ? "bg-surface" : ""
                }`}
              >
                <span className="text-primary text-[14px]">{limit.endpoint}</span>
                <span className="text-secondary text-[14px] font-mono">{limit.requests}</span>
                <span className="text-secondary text-[14px] font-mono">{limit.burst}</span>
                <span className="text-tertiary text-[14px]">{limit.auth}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
