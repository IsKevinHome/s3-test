async function dogRoutes(fastify, options) {
  // GET all dogs
  fastify.get("/", async (request, reply) => {
    return {
      dogs: [
        { id: 1, name: "Buddy", breed: "Golden Retriever" },
        { id: 2, name: "Max", breed: "German Shepherd" },
        { id: 3, name: "Charlie", breed: "Labrador" },
      ],
    };
  });

  // POST create a new dog
  fastify.post("/", async (request, reply) => {
    const newDog = request.body;
    return {
      message: "Dog created successfully",
      dog: newDog,
    };
  });
}

export default dogRoutes;
