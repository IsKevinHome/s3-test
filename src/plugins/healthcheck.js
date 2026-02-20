import * as s3Service from "../services/s3.service.js";

async function healthcheck(fastify, options) {
  // Health check endpoint
  fastify.get("/health", async (request, reply) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
      memory: process.memoryUsage(),
    };

    return reply.code(200).send(healthcheck);
  });

  // S3 health check endpoint
  fastify.get("/health/s3", async (request, reply) => {
    try {
      await s3Service.testS3Connection();
      return reply.code(200).send({ status: "ok", service: "s3" });
    } catch (error) {
      return reply.code(503).send({
        status: "error",
        service: "s3",
        error: "S3 connection failed",
        message: error.message,
      });
    }
  });

  // Simple status check
  fastify.get("/", async (request, reply) => {
    return { status: "ok", message: "Server is running" };
  });
}

export default healthcheck;
