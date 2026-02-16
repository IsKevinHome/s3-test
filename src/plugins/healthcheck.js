async function healthcheck(fastify, options) {
  // Health check endpoint
  fastify.get('/health', async (request, reply) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
      memory: process.memoryUsage(),
    };

    return reply.code(200).send(healthcheck);
  });

  // Simple status check
  fastify.get('/', async (request, reply) => {
    return { status: 'ok', message: 'Server is running' };
  });
}

export default healthcheck;
