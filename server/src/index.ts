import server from "./app.js";

const FASTIFY_PORT = Number(process.env.FASTIFY_PORT) || 3006;

server.listen({port: FASTIFY_PORT}).then(() => {
    server.log.info(`🚀  Fastify server running on port http://localhost:${FASTIFY_PORT}`)
    server.log.info(`Route skills: /api/v1/skills`)
});


