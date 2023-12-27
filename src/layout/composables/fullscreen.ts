// import { useDark, useToggle } from "@vueuse/core";

// export const isDark = useDark();
// export const toggleDark = useToggle(isDark);


import { useFullscreen } from '@vueuse/core'
import type { Ref } from 'vue'

// const { isFullscreen, enter, exit, toggle } = useFullscreen()


// const el = ref<HTMLElement | null>(null)

export const toggleFullscreen = (el: Ref<HTMLElement | null> | undefined) => {
    const { isFullscreen, enter, exit, toggle } = el ? useFullscreen(el) : useFullscreen(el)

    return { isFullscreen, enter, exit, toggle }
}