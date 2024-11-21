import { ISkill } from "@localServer/models/skill.model";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  const body = await readBody(event);

  try {
    return await $fetch<ISkill>(`/skills/${id}`, {
      baseURL: "http://localhost:3006/api/v1",
      method: event.method,
      body,
      headers: {
        "content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err, "Ошибка отправки");
  }
});
