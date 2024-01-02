
import type { GlobalBtnItem } from '@/stores/types'


export const GlobalBtnList: GlobalBtnItem[] = [
    {
        name: '搜索',
        iconType: 'ep',
        icon: 'Search',
        id: 'search',
        component: 'SearchBar'
    },
    {
        name: '全屏',
        iconType: 'ep',
        icon: 'FullScreen',
        id: 'fullScreen',
        component: 'FullScreenBar'
    },
    {
        name: '消息',
        iconType: 'ep',
        icon: 'ChatDotRound',
        id: 'messageBox',
        component: 'MessageBar'
    },
    {
        name: '国际化',
        iconType: 'ify',
        icon: 'iconoir:language',
        id: 'globalLanguage',
        component: 'GlobalLanguage'
    },
    {
        name: '暗黑',
        iconType: 'ep',
        icon: 'MoonNight',
        id: 'nightTheme',
        component: 'NightTheme'
    }
]