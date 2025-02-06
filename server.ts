import index from "./index.html";

const server = Bun.serve({
  static: {
    "/": index,
  },

  async fetch() {
    return new Response("Hello, World!");
  },
});

console.log(`Server is running on http://${server.hostname}:${server.port}/`);
