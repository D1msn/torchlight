import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";

export default async function indexController(fastify: FastifyInstance) {
    // GET /
    fastify.get("/", async function (
        _request: FastifyRequest,
        reply: FastifyReply
    ) {
        reply
            .header("Content-Type", "text/html; charset=utf-8")
            .send('Hello World!');
    });
}
