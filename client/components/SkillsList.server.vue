<script setup lang="ts">
import type { ISkill } from "@localServer/models/skill.model";

const skills = await $fetch<ISkill[]>("/skills", {
  baseURL: "http://localhost:3006/api/v1",
  method: "GET",
});
</script>

<template>
  <div class="wrapper" v-if="skills">
    <Skill v-for="skill in skills" :skill="skill" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 16px;
}
</style>
