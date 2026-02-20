import { connectDatabase, disconnectDatabase } from "../config/database.js";

export default async function databasePlugin(fastify, options) {
  await connectDatabase();

  // this hook fires when when the server shuts down.
  fastify.addHook("onClose", async (instance) => {
    await disconnectDatabase();
  });
}
