<script setup lang="ts" name="SubMenuLink">
import { isExternal } from '@/util/validate';

interface Props {
    to: string
}

const props = defineProps<Props>()

</script>

<template>
    <a v-if="isExternal(props.to)" :href="props.to" target="_blank" rel="noopener">
        <slot />
    </a>
    <RouterLink v-else :to="props.to">
        <slot />
    </RouterLink>
</template>

<style lang="scss" scoped></style>