import { ISkill } from "@localServer/models/skill.model";

export default defineEventHandler(async (event) => {
  return await $fetch<ISkill[]>("/skills", {
    baseURL: "http://localhost:3006/api/v1",
    method: event.method,
  });
});
