import cors from "@fastify/cors";

const VITE_DEFAULT_ORIGIN = "http://localhost:5173";

export default async function corsPlugin(fastify, options) {
  await fastify.register(cors, {
    origin: process.env.CORS_ORIGIN || VITE_DEFAULT_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });
}
