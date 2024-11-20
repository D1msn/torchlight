import {FastifyReply, FastifyRequest} from "fastify";
import {Skill} from "../models/skill.model.js";

async function getAllSkills(req: FastifyRequest, reply: FastifyReply) {
    try {
        const skills = await Skill.find()
        reply.status(200).send(skills)
    } catch (error) {
        reply.status(500).send(error)
    }
}

async function getSkillById(req: FastifyRequest, reply: FastifyReply) {
    try {
        const skill = await Skill.findById(req.params?.id)
        reply.status(200).send(skill)
    } catch (error) {
        reply.status(500).send(error)
    }
}

async function createSkill(req: FastifyRequest, reply: FastifyReply) {
    try {
        const skill = await Skill.create(req.body)
        const result = await skill.save({timestamps: {createdAt: false, updatedAt: true}})
        reply.status(200).send(result)
    } catch (error) {
        reply.status(500).send(error)
    }
}

async function updateSkill(req: FastifyRequest, reply: FastifyReply) {
    try {
        const newSkill = await Skill.findByIdAndUpdate(req.params?.id, req.body, {
            new: true,
            timestamps: {createdAt: false, updatedAt: true}
        })
        reply.status(200).send(newSkill)
    } catch (error) {
        reply.status(500).send(error)
    }
}

async function deleteSkill(req: FastifyRequest, reply: FastifyReply) {
    try {
        const deletedSkill = await Skill.findByIdAndDelete(req.params?.id)
        if (!deletedSkill) {
            reply.status(204).send('Скилл не найден')
            return
        }

        reply.status(200).send('Успешное удаление')

    } catch (error) {
        reply.status(500).send(error)
    }
}

export const skillsController = {
    getAllSkills,
    getSkillById,
    createSkill,
    updateSkill,
    deleteSkill
}
