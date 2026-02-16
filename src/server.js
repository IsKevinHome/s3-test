import Fastify from 'fastify';
import app from './app.js';

const fastify = Fastify({
  logger: true,
});

// Register the application as a plugin
fastify.register(app);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
