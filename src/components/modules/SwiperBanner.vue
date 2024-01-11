<script setup lang="ts" name="SwiperBanner">
import { computed, ref, watch } from 'vue'

interface ISwiperOptions {
    img: string,
}

interface IProps {
    options: ISwiperOptions[] | null,
    active?: number | string,
    debounce?: number | string,
}
const props = withDefaults(defineProps<IProps>(), {
    options: null,
    active: 0,
    debounce: 5,
})

const options = computed((): ISwiperOptions[] => props.options || [])
// const optionsLength = computed((): number => options.value.length)
const active = ref(props.active)
let timer: any = null
const curWidth = ref(0);
const num = props.debounce as number * 10

const nextActive = () => {
    if (active.value == options.value.length - 1) {
        active.value = 0
    } else {
        active.value = active.value as number * 1 + 1
    }
}
watch(active, (val) => {
    if (timer) {
        clearInterval(timer)
        timer = null
    }
    
    let count = 0
    curWidth.value = 0

    timer = setInterval(() => {
        if (count == num) {
            nextActive()
        }
        count++
        curWidth.value = count / num * 100
    }, 100)
})
</script>

<template>
<div class="swiper-banner relative h-[560px] min-w-[1180px] overflow-hidden">
    <div class="swiper-container">
        <div v-for="(item, index) in options" :key="item.img" :style="`opacity: ${active == index ? 1 : 0};`">
            <img :src="item.img" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center" />
        </div>
    </div>
    <div class="wapper">
        <ul class="absolute bottom-[88px] z-20 flex h-[24px]">
            <div class="cursor-pointer py-[10px]" v-for="(item, index) in options" :key="index" @click="active = index">
                <li class="mr-[8px] h-[3px] w-[36px] bg-[#000B17]/[0.1]">
                    <div v-if="index == active" class="h-[3px] bg-[#0071EF]" :style="`width: ${curWidth}%;`"></div>
                </li>
            </div>
        </ul>
    </div>
</div>
</template>

<style lang="scss" scoped>
.wapper {
    width: 1180px;
    margin: 0 auto;
    min-width: 1180px;
}
@keyframes width-animation {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>