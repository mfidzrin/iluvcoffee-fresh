import { Handlers } from "https://deno.land/x/fresh@1.0.2/server.ts";

const coffees = [
  {
    id: 1,
    name: "Shipwrect Roast",
    brand: "Buddy Brew",
    flavors: ["chocolate", "vanilla"],
  },
];

export const handler: Handlers = {
  GET(_req, _ctx) {
    return new Response(JSON.stringify(coffees), {
      headers: { "Content-Type": "application/json" },
    });
  },
  async POST(req, _ctx) {
    const body = await req.json();
    return new Response(JSON.stringify(body), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
