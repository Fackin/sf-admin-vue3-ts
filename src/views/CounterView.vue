<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore();
// export default {
//     setup() {
//         const counterStore = useCounterStore();
//         return {
//             counterStore
//         }
//     }
// }
</script>

<template>
  <main><button @click="counterStore.increment">counter + 1</button>{{ counterStore.count }}</main>
</template>
