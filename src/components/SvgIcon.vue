<script setup lang="ts" name="SvgIcon">
    import { computed } from 'vue';
    import { Icon } from '@iconify/vue';

    export type IconType = "ep" | "ify" | "svg";

    interface Props {
        name: string,
        color?: string,
        type?: IconType,
    }

    console.log(parent)

    const props = withDefaults(defineProps<Props>(), {
        // color: "#fff",
        type: 'svg',
    })
    const iconName = computed((): string => {
        if (`${props.type}` === 'svg') {
            return `#icon-${props.name}`
        } else {
            return `${props.name}`
        }
    })
    const refColor = computed((): string =>`${props.color}` )
    const refType = computed((): string =>`${props.type}` )
    const svgClass = computed((): string => {
        if (`${props.type}` === 'svg') {
            return `svg-icon icon-${props.name}`
        } else {
            return `svg-icon`
        }
    })
</script>
<template>
    <Icon v-if="refType == 'ify'" :class="svgClass" :icon="iconName" :color="refColor" />
    <el-icon v-if="refType == 'ep'" :class="svgClass" :color="refColor" v-bind="$attrs"><component :is="iconName"/></el-icon>
    <svg v-if="refType == 'svg'" :class="svgClass" aria-hidden="true" v-bind="$attrs" >
        <use :xlink:href="iconName" :fill="refColor" />
    </svg>
</template>
<style lang="scss" scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    // vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>