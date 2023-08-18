<script setup>
import Svg from "./ui/Svg.vue";
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  variant: {
    type: String,
    default: "positive",
    validator: (value) => ["neutral", "positive"].includes(value),
  },
});
</script>

<template>
  <div class="badge" :title="props.user.username">
    <!-- NOTE: check "to" attr, it has been changed -->
    <router-link
      :to="{ name: 'user', params: { username: props.user.username } }"
      class="badge__avatar"
    >
      <img
        :src="props.user.profile_image.small"
        alt="author-avatar"
        class="badge__img"
      />
    </router-link>
    <div class="badge__data">
      <!-- NOTE: check "to" attr, it has been changed -->
      <router-link
        :to="{ name: 'user', params: { username: props.user.username } }"
        class="badge__name link"
      >
        {{ props.user.name }}
      </router-link>
      <!-- NOTE: check "to" attr, it has been changed -->
      <router-link
        v-if="props.user.for_hire"
        :to="{ name: 'user', params: { username: props.user.username } }"
        class="badge__verification link"
        :class="{ badge__verification_neutral: props.variant === 'neutral' }"
      >
        Available for hire
        <Svg name="checkmark_in_circle" size="xs" class="badge__icon" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.badge {
  display: inline-flex;
  gap: 1em;
  font-size: var(--fz-r);
  color: rgb(var(--banner-color));
}
.badge__avatar {
  border-radius: 50%;
  overflow: hidden;
  height: var(--icon-xl);
  width: var(--icon-xl);
}
.badge__img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.badge__data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.badge__name {
}
.badge__verification {
  --color: var(--color-positive);
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: rgb(var(--color));
  font-size: var(--fz-xs);
}
.badge__verification:hover {
  opacity: 1;
}
.badge__verification_neutral {
  --color: var(--banner-color);
}
.badge__icon {
  fill: rgb(var(--color));
}
</style>