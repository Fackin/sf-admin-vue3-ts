
export interface ILayoutBtnConfig {
    "search"?: boolean,
    "fullScreen"?: boolean,
    "messageBox"?: boolean,
    "globalLanguage"?: boolean,
    "nightTheme"?: boolean,
    // [key: string]: boolean,
}
export type TLayoutBtn = "search" | "fullScreen" | "messageBox" | "globalLanguage" | "nightTheme"


export interface GlobalBtnItem {
    name: string
    iconType: string
    icon: string
    id: TLayoutBtn
    component: any
}