import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Documentation — Cryptorio | FAVA Capital",
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

export default function APIPage() {
  return (
    <div className="bg-void min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-crypto-electric/30 text-crypto-electric text-sm font-[family-name:var(--font-heading)] tracking-wider uppercase">
            Developers
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-ivory mb-4">
            API Documentation
          </h1>
          <p className="text-platinum/60 text-lg leading-relaxed">
            Programmatic access to Cryptorio&apos;s trading engine. Build bots,
            integrate market data, and manage your portfolio through our RESTful
            and WebSocket APIs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {[
            { title: "REST API", desc: "HTTPS endpoints for trading, account, and market data", version: "v1" },
            { title: "WebSocket API", desc: "Real-time streaming for trades, orderbook, and tickers", version: "v1" },
            { title: "Sandbox", desc: "Test environment with paper trading and simulated markets", version: "testnet" },
          ].map((api) => (
            <div
              key={api.title}
              className="bg-obsidian/60 border border-ivory/5 rounded-xl p-6 hover:border-crypto-electric/20 transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory group-hover:text-crypto-electric transition-colors">
                  {api.title}
                </h3>
                <span className="px-2 py-0.5 text-[10px] bg-crypto-electric/10 text-crypto-electric rounded font-mono">
                  {api.version}
                </span>
              </div>
              <p className="text-platinum/50 text-sm">{api.desc}</p>
            </div>
          ))}
        </div>

        {/* Authentication */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-ivory mb-2">
            Authentication
          </h2>
          <p className="text-platinum/50 text-sm mb-6 max-w-2xl">
            All private endpoints require HMAC-SHA256 signed requests. Generate your
            API key and secret from the account settings dashboard. Include the
            following headers with every authenticated request:
          </p>
          <div className="bg-obsidian border border-ivory/5 rounded-xl p-5 font-mono text-sm overflow-x-auto">
            <div className="text-platinum/40">
              <span className="text-crypto-electric">X-API-Key</span>: your_api_key
            </div>
            <div className="text-platinum/40">
              <span className="text-crypto-electric">X-API-Signature</span>: HMAC-SHA256(timestamp + method + path + body, api_secret)
            </div>
            <div className="text-platinum/40">
              <span className="text-crypto-electric">X-API-Timestamp</span>: 1714000000
            </div>
          </div>
        </section>

        {/* REST API */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-ivory mb-2">
            REST API
          </h2>
          <p className="text-platinum/50 text-sm mb-6">
            Base URL:{" "}
            <code className="text-crypto-electric bg-crypto-electric/10 px-2 py-0.5 rounded text-xs">
              https://api.cryptorio.exchange/v1
            </code>
          </p>

          {/* Fetch Orderbook Example */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-0.5 text-xs bg-green-500/10 text-green-400 rounded font-mono font-medium">
                GET
              </span>
              <code className="text-ivory text-sm font-mono">/orderbook/{"{pair}"}</code>
            </div>
            <div className="bg-obsidian border border-ivory/5 rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-ivory/5 flex items-center justify-between">
                <span className="text-platinum/40 text-xs font-[family-name:var(--font-heading)]">
                  JavaScript
                </span>
                <span className="text-platinum/20 text-xs">example</span>
              </div>
              <pre className="p-5 text-sm font-mono text-platinum/70 overflow-x-auto leading-relaxed">
                <code>{restExample}</code>
              </pre>
            </div>
          </div>

          {/* Place Order Example */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-0.5 text-xs bg-blue-500/10 text-blue-400 rounded font-mono font-medium">
                POST
              </span>
              <code className="text-ivory text-sm font-mono">/orders</code>
            </div>
            <div className="bg-obsidian border border-ivory/5 rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-ivory/5 flex items-center justify-between">
                <span className="text-platinum/40 text-xs font-[family-name:var(--font-heading)]">
                  JavaScript
                </span>
                <span className="text-platinum/20 text-xs">example</span>
              </div>
              <pre className="p-5 text-sm font-mono text-platinum/70 overflow-x-auto leading-relaxed">
                <code>{placeOrderExample}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* WebSocket API */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-ivory mb-2">
            WebSocket API
          </h2>
          <p className="text-platinum/50 text-sm mb-6">
            Endpoint:{" "}
            <code className="text-crypto-electric bg-crypto-electric/10 px-2 py-0.5 rounded text-xs">
              wss://stream.cryptorio.exchange/v1
            </code>
          </p>

          <div className="bg-obsidian border border-ivory/5 rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-ivory/5 flex items-center justify-between">
              <span className="text-platinum/40 text-xs font-[family-name:var(--font-heading)]">
                JavaScript
              </span>
              <span className="text-platinum/20 text-xs">example</span>
            </div>
            <pre className="p-5 text-sm font-mono text-platinum/70 overflow-x-auto leading-relaxed">
              <code>{wsExample}</code>
            </pre>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-ivory mb-2">
            Rate Limits
          </h2>
          <p className="text-platinum/50 text-sm mb-6">
            Rate limits are applied per API key. Exceeding limits returns HTTP 429.
          </p>

          <div className="bg-obsidian/60 border border-ivory/5 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-ivory/5 text-xs text-platinum/40 font-[family-name:var(--font-heading)] uppercase tracking-wider">
              <span>Endpoint</span>
              <span>Rate Limit</span>
              <span>Burst</span>
              <span>Authentication</span>
            </div>

            {rateLimits.map((limit) => (
              <div
                key={limit.endpoint}
                className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-ivory/5 last:border-b-0"
              >
                <span className="text-ivory text-sm font-[family-name:var(--font-heading)]">
                  {limit.endpoint}
                </span>
                <span className="text-platinum/60 text-sm font-mono">{limit.requests}</span>
                <span className="text-platinum/60 text-sm font-mono">{limit.burst}</span>
                <span className="text-platinum/40 text-sm">{limit.auth}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sandbox */}
        <section>
          <div className="bg-obsidian border border-ivory/5 rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(99,102,241,0.06),transparent_60%)]" />
            <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl text-ivory mb-3">
                  Sandbox Environment
                </h2>
                <p className="text-platinum/60 leading-relaxed max-w-xl">
                  Test your integration without risking real funds. The sandbox mirrors
                  production with simulated market data, paper trading, and full API
                  parity. Available at{" "}
                  <code className="text-crypto-electric bg-crypto-electric/10 px-1.5 py-0.5 rounded text-xs">
                    sandbox.cryptorio.exchange
                  </code>
                </p>
              </div>
              <a
                href="#"
                className="inline-block px-8 py-3.5 bg-crypto-electric text-white font-[family-name:var(--font-heading)] font-medium rounded-lg hover:bg-crypto-electric/90 transition-colors whitespace-nowrap"
              >
                Access Sandbox
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
