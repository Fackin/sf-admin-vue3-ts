<script setup lang="ts" name="CalendarSample">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// defineOptions({name: 'CalendarSample'})
/** 
 * 日历布局
 * 控制面板（日期语言切换、颜色切换、尺寸切换、日期切换、重置、关闭）
 * 
 * 控制面板 根据组件的右侧是否有空间展示 右侧没有空间在左侧展示
 * 面板的展开收起
 * 面板的子菜单的展开收起 子菜单的展开方向判断
 * 
 * TODO: 切换日期时翻页效果 可以使用 turn.js
 */

// ------ 配置的选项 -------
// 语言列表
const langList: any = {
    'zh-CN': '中',
    'en-US': '英',
}

// 颜色列表
const themeList: any = [{
    name: '海蓝色',
    theme: 'navy',
    color: '#001F3F',
}, {
    name: '湖绿色',
    theme: 'aqua',
    color: '#7FDBFF',
}, {
    name: '默认',
    theme: 'default',
    color: '#ff6331',
}, {
    name: '橙红色',
    theme: 'orange',
    color: '#FF851B',
}, {
    name: '紫红色',
    theme: 'fuchsia',
    color: '#F012BE',
}]

// 尺寸列表
const sizeList = [{
    name: '大',
    size: 'L',
    className: 'large',
}, {
    name: '中',
    size: 'M',
    className: 'medium',
}, {
    name: '小',
    size: 'S',
    color: 'small',
}]

// --------- ref ----------
// 语言
const curLang = ref(navigator.language)
// 主题色
const curTheme = ref('default')
const curThemeColor = ref('#ff6331')
// 尺寸
const curSize = ref('M')
// 日期时间
const curDate = ref(new Date)
const caleRef = ref<HTMLElement>()
// 展示控制选项
const isOperation = ref(false);
// 控制面板是否显示在右侧
const isAtRight = ref(true)

// -------- computed --------
// 日期
const curYear = computed((): string => `${curDate.value.getFullYear()}`)
const curMonth = computed((): string => `${curDate.value.toLocaleString(curLang.value, { month: 'long'})}`)
const curWeek = computed((): string => `${curDate.value.toLocaleString(curLang.value, { weekday: 'long'})}`)
const curDay = computed((): string => `${curDate.value.getDate()}`)

// 当前语言显示
const langName = computed((): string => langList[curLang.value])
// 控制面板的位置
const boxFlexFlow = computed(() => isAtRight.value ? 'row' : 'row-reverse' )
const colorBoxPosition = computed(() => isAtRight.value ? { right: '40px' } : { left: '40px' } )


// -------- 生命周期 -------
onMounted(() => {})
onUnmounted(() => {})

// -------- method --------
// 打开配置面板
const switchOperation = () => {
    isOperation.value = !isOperation.value
    if (caleRef.value) {
        const {offsetLeft, parentElement, offsetParent} = caleRef.value
        if (parentElement || offsetParent) {
            const clientWidth = parentElement?.clientWidth || offsetParent?.clientWidth || 0
            console.log(clientWidth, clientWidth - offsetLeft - 210)
            if (clientWidth - offsetLeft - 210 > 50) {
                isAtRight.value = true
            } else {
                isAtRight.value = false
            }
        }
    }
}
// 切换语言
const switchLang = () => {
    if (curLang.value == 'zh-CN') {
        curLang.value = 'en-US';
        return
    }
    if (curLang.value == 'en-US') {
        curLang.value = 'zh-CN';
        return
    }
}
// 切换主题色
const switchColor = (item: any) => {
    curTheme.value = item.theme
    curThemeColor.value = item.color
}
// 切换尺寸
const switchSize = (item: any) => {
    curSize.value = item.size
}
const rotateDeg = ref(0)
// 重置
const handleReset = () => {
    curLang.value = 'zh-CN';
    curTheme.value = 'default'
    curThemeColor.value = '#ff6331'
    curSize.value = 'M'
    rotateDeg.value = rotateDeg.value + 360
    curDate.value = new Date()
}

// 前一个月
const handleBeforeMonth = () => {
    curDate.value = new Date(curDate.value.setMonth(curDate.value.getMonth() - 1))
}
// 前一天
const handleBeforeToday = () => {
    curDate.value = new Date(curDate.value.getTime() - 24 * 60 * 60 * 1000)
}
// 回到今天
const handleToday = () => {
    curDate.value = new Date()
}
// 下一天
const handleAfterToday = () => {
    curDate.value = new Date(curDate.value.getTime() + 24 * 60 * 60 * 1000)
}
// 下一月
const handleAfterMonth = () => {
    curDate.value = new Date(curDate.value.setMonth(curDate.value.getMonth() + 1))
}
</script>
<template>
    <div class="calendar-box" ref="caleRef" :style="{ 'flex-direction': boxFlexFlow }">
        <div class="calendar" :class="`calendar_${curSize}`">
            <div class="month" :style="{backgroundColor: curThemeColor}">{{ curMonth }}</div>
            <div class="week">{{ curWeek }}</div>
            <div class="day">{{ curDay }}</div>
            <div class="year">{{ curYear }}</div>

            <div class="operation-switch" :class="{ active: isOperation }" @click="switchOperation">
                <svg-icon name="Operation" type="ep"/>
            </div>
        </div>
        <!-- 控制面板 -->
        <el-collapse-transition>
            <div v-show="isOperation" class="operation-box" >
                <div class="operation-item" @click="switchLang">{{ langName }}</div>
                <div class="operation-item operation-item_menu">
                    <div class="color-item" :style="{backgroundColor: curThemeColor, margin: '0 auto'}"></div>

                    <div class="menu-box choice-color-box" :style="colorBoxPosition">
                        <el-tooltip v-for="item in themeList" :key="item.theme" :content="item.name" placement="bottom">
                            <div 
                                class="menu-item"
                                :style="{backgroundColor: item.color, margin: '0 3px'}"
                                :class="{active: item.theme == curTheme}"
                                @click="() => switchColor(item)"
                            ></div>
                        </el-tooltip>
                    </div>
                </div>
                <div class="operation-item operation-item_menu">
                    <span>{{ curSize }}</span>

                    <div class="menu-box choice-color-box" :style="colorBoxPosition">
                        <el-tooltip v-for="item in sizeList" :key="item.size" :content="item.name" placement="bottom">
                            <div 
                                class="menu-item"
                                :class="{active: item.size == curSize}"
                                @click="() => switchSize(item)"
                            >{{ item.size }}</div>
                        </el-tooltip>
                    </div>
                </div>
                <div class="operation-item operation-item_menu" >
                    <svg-icon name="Calendar" type="ep"/>
                    <div class="menu-box choice-color-box" :style="colorBoxPosition">
                        <el-tooltip content="前一月" placement="bottom">
                            <div class="menu-item">
                                <svg-icon class="menu-item" name="DArrowLeft" type="ep" @click="handleBeforeMonth"/>
                            </div>
                        </el-tooltip>
                        <el-tooltip content="前一天" placement="bottom">
                            <div class="menu-item">
                                <svg-icon class="menu-item" name="ArrowLeft" type="ep" @click="handleBeforeToday"/>
                            </div>
                        </el-tooltip>
                        <el-tooltip content="今天" placement="bottom">
                            <div class="menu-item">
                                <svg-icon class="menu-item" name="Aim" type="ep" @click="handleToday"/>
                            </div>
                        </el-tooltip>
                        <el-tooltip content="下一天" placement="bottom">
                            <div class="menu-item">
                                <svg-icon class="menu-item" name="ArrowRight" type="ep" @click="handleAfterToday"/>
                            </div>
                        </el-tooltip>
                        <el-tooltip content="下一月" placement="bottom">
                            <div class="menu-item">
                                <svg-icon class="menu-item" name="DArrowRight" type="ep" @click="handleAfterMonth"/>
                            </div>
                        </el-tooltip>
                    </div>
                </div>
                <div class="operation-item" >
                    <svg-icon name="Refresh" type="ep" @click="handleReset" :style="{transformOrigin: '50% 50%', transition: 'all 0.4s ease', transform: `rotate(-${rotateDeg}deg)`}"/>
                </div>
                <div class="operation-item" >
                    <svg-icon name="CircleClose" type="ep" @click="isOperation = false"/>
                </div>
            </div>
        </el-collapse-transition>
    </div>
</template>
<style lang="scss" scoped>
.calendar-box {
    display: flex;
    width: fit-content;
}
.calendar {
    position: relative;
    display: flex;
    width: 200px;
    height: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 0 0 rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    overflow: hidden;
    -webkit-box-reflect: below 1px linear-gradient(transparent,transparent,#0004);
    
    // transform-origin: center; /* 调整变换原点 */
    // transform: scale(1.4);
    transition: all 0.3s ease; /* 添加过渡效果 */
    // &:hover {
    //     width: calc(190px * 1.8);
    //     // transform: scale(1.8); /* 鼠标悬停时缩小到80% */
    // }
    .month {
        padding: 6px;
        width: 100%;
        background-color: #ff6331;
        text-align: center;
        color: #fff;
        font-size: 30px;
        font-weight: 600;
        border-radius: 8px 8px 0 0;
    }
    .week {
        font-size: 16px;
        color: #999;
    }
    .day {
        font-size: 80px;
        color: #333;
        font-weight: 700;
        line-height: 84px;
    }
    .year {
        font-size: 20px;
        font-weight: 500;
        color: #999;
    }
    .operation-switch {
        position: absolute;
        top: 4px;
        right: 4px;
        cursor: pointer;
        color: #fff;
        &.active {
            color: var(--el-color-primary);
        }
    }
}
.calendar.calendar_L {
    width: 220px;
    .month {
        font-size: 32px;
        padding: 12px;
    }
    .week {
        margin-top: 8px;
        font-size: 18px;
    }
    .day {
        font-size: 84px;
        line-height: 88px;
    }
    .year {
        font-size: 22px;
        margin-bottom: 12px;
    }
}

.calendar.calendar_M {
    width: 190px;
    .month {
        font-size: 30px;
        padding: 6px;
    }
    .week {
        margin-top: 8px;
        font-size: 16px;
    }
    .day {
        font-size: 80px;
        line-height: 84px;
    }
    .year {
        font-size: 20px;
        margin-bottom: 8px;
    }
}

.calendar.calendar_S {
    width: 160px;
    .month {
        padding: 4px;
        font-size: 28px;
    }
    .week {
        margin-top: 4px;
        font-size: 14px;
    }
    .day {
        font-size: 76px;
        line-height: 80px;
    }
    .year {
        font-size: 18px;
        margin-bottom: 4px;
    }
}
.operation-box {
    width: 40px;
    height: fit-content;
    border-radius: 4px;
    margin: 0 10px;
    box-shadow: 0 0 0 0 rgb(255, 255, 255), 0.2em 0.2em 1em rgba(0, 0, 0, 0.2);
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background);
    .operation-item {
        position: relative;
        width: 100%;
        height: 28px;
        padding: 3px 0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover {
            background-color: var(--color-background-mute);
        }
    }
}
.operation-item_menu {
    .menu-item {
        width: 16px;
        height: 16px;
        border-radius: 8px;
        line-height: 14px;
        font-size: 14px;
        text-align: center;
        margin: 0 2px;
    }
    .menu-box {
        display: flex;
        position: absolute;
        right: 40px;
        top: 0;
        height: 28px;
        background-color: var(--color-background);
        border-radius: 4px;
        box-shadow: 0.1em 0.1em 1em rgba(0, 0, 0, 0.1);
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 0;
        transition: width 0.3s linear;
        overflow: hidden;
        // transition: width 0.5s, transform 0.5s;
        // will-change: width;
        .active {
            border: 1px solid var(--el-color-primary);
        }
    }
    &:hover .choice-color-box {
        width: 110px;
    }
    .choice-color-box:hover {
        width: 110px;
    }

}
.color-item {
    width: 16px;
    height: 16px;
    border-radius: 8px;
}
</style>