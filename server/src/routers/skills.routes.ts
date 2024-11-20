import {FastifyInstance} from "fastify";
import {skillsController} from "../controllers/skillsController.js";

export default async function skillsRoutes(fastify: FastifyInstance) {
    fastify.get("/", skillsController.getAllSkills);
    fastify.get("/:id", skillsController.getSkillById);
    fastify.post("/", skillsController.createSkill);
    fastify.put("/:id", skillsController.updateSkill);
    fastify.delete("/:id", skillsController.deleteSkill);
}
