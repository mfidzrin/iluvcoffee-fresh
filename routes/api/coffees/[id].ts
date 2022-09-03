import { Handlers } from "https://deno.land/x/fresh@1.0.2/server.ts";

const coffees = [
  {
    id: 1,
    name: "Shipwrect Roast",
    brand: "Buddy Brew",
    flavors: ["chocolate", "vanilla"],
  },
  {
    id: 2,
    name: "Latte",
    brand: "Kopi Village",
    flavors: [],
  },
];

export const handler: Handlers = {
  GET(_req, ctx) {
    const coffeeIndex = coffees.findIndex(
      (coffee) => coffee.id === +ctx.params.id
    );
    if (coffeeIndex >= 0) {
      return new Response(JSON.stringify(coffees.splice(coffeeIndex, 1)), {
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(null, { status: 404 });
  },
  async PATCH(req, ctx) {
    const coffeeIndex = coffees.findIndex(
      (coffee) => coffee.id === +ctx.params.id
    );
    if (coffeeIndex >= 0) {
      const body = await req.json();
      coffees[coffeeIndex] = { ...coffees[coffeeIndex], ...body };
      return new Response(JSON.stringify(coffees[coffeeIndex]), {
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(null, { status: 404 });
  },
  DELETE(_req, ctx) {
    const coffeeIndex = coffees.findIndex(
      (coffee) => coffee.id === +ctx.params.id
    );
    if (coffeeIndex >= 0) {
      coffees.splice(coffeeIndex, 1);
      return new Response(null, { status: 204 });
    }
    return new Response(null, { status: 404 });
  },
};
