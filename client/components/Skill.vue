<script setup lang="ts">
import type { ISkill } from "@localServer/models/skill.model";

const { skill } = defineProps<{
  skill: ISkill;
}>();

const checkDiffDateNow = (initDate: string) => {
  const dayjs = useDayjs();

  const updateAt = dayjs(initDate);
  const now = dayjs();

  const diff = now.diff(updateAt, "hour");

  if (diff > 1) {
    return true;
  }
};
</script>

<template>
  <div class="skill" :class="{ diffError: checkDiffDateNow(skill.updatedAt) }">
    <div class="skill__id">{{ skill._id }}</div>
    <NuxtImg class="skill__image" :src="skill.image" />
    <div class="skill__body">
      <div class="skill__name">{{ skill.name }}</div>
      <div class="tagsWrapper" v-if="skill.tags">
        <div v-for="tag in skill.tags">{{ tag }}</div>
      </div>
      <div class="skill__priceWrapper">
        <div class="skill__price">
          {{ skill.price }}
          <NuxtImg
            src="https://cdn.tlidb.com/UI/Textures/Common/Icon/Item/128/UI_Item_chuhuoyuanzhiV3_Icon_128.webp"
          />
        </div>
        <div v-if="skill.updatedAt">
          обновлено:
          {{ $dayjs(skill.updatedAt).format("DD.MM.YYYY HH:mm") }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skill {
  font-size: 14px;
  background-color: rgba(0, 253, 10, 0.11);
  padding: 8px;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__priceWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__id {
    margin-bottom: 12px;
    font-size: 8px;
    align-self: flex-end;
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  &__name {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }

  &__price {
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 16px;
    font-weight: bold;

    img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
    }
  }

  &.diffError {
    border-color: red;
    background-color: rgba(255, 0, 0, 0.11);
  }

  &__image {
    width: 64px;
    height: 64px;
  }
}

.tagsWrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
