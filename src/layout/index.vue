<script lang="ts">
import Sidebar from './classic/Sidebar.vue'
import ClassicHeader from './classic/Header.vue'
import TagsBar from './components/TagsBar.vue'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    ClassicHeader,
    TagsBar,
  }
}
</script>
<script lang="ts" setup>
import { ref } from 'vue'
const mainRef = ref(null)
</script>
<template>
    <div class="layout">
        <aside>
            <Sidebar />
        </aside>
        <main>
            <header>
                <ClassicHeader class="global-header" />
            </header>

            <main>
                <TagsBar class="global-tab" :el="mainRef"/>
                <div ref="mainRef" class="app-main flex-grow bg-#f6f9f8 dark:bg-#101014 transition duration-300 ease-in-out">
                    <router-view></router-view>
                </div>
            </main>
            <footer>footer</footer>
        </main>
    </div>
</template>
<style scoped>
.layout {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    overflow: hidden;
}

.layout > aside {
    /* flex: 0 0 200px; */
    background-color: #f5f5f5;
}

.layout > main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}


.layout > main > header{
    /* height: 80px;
    background-color: #f5f5f5; */
    width: 100%;
}
.layout > main > main{
    flex: 1;
    /* background-color: red; */
    /* padding: 10px; */
    overflow: hidden;
}
.app-main {
    padding: 10px;
    overflow: auto;
    height: calc(100vh - 128px);
}
.global-header, .global-tab {
    position: relative;
    box-shadow: 0 1px 2px #00152914;
}

</style>