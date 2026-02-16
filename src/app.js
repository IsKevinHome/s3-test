import healthcheck from './plugins/healthcheck.js';
import dogRoutes from './routes/dogs.js';

/**
 * Application plugin - contains all app logic
 * This is the core of your application, separated from server infrastructure
 */
export default async function app(fastify, options) {
  // Register plugins
  fastify.register(healthcheck);

  // Register routes
  fastify.register(dogRoutes, { prefix: '/dogs' });
}
