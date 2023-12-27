import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import ColorUnit from '@/util/ColorUnit'

const DEFAULT_PRIMARY = '#409eff'

export const useSettingStore = defineStore('setting', () => {
  const themeConfig = ref({
    primary: DEFAULT_PRIMARY,
    isDark: false,
  })

  watch(
    themeConfig,
    (themeConfig) => {
      console.log(themeConfig, '--11themeConfig')
    },
    { deep: true }
  )

  const setThemeConfig = (val: any) => {
    themeConfig.value = {
      ...themeConfig.value,
      ...val,
    }
  }

  const setThemePrimaryColor = (color: string | null) => {
    color = color || DEFAULT_PRIMARY
    setThemeColor([['primary', color]])
  }

  const setThemeColor = (colorMap: string[][]) => {
    const _namespace = 'el'
    themeConfig.value.primary = colorMap[0][1]
    colorMap.forEach(colorItem => {
      setPropertyColor(`--${_namespace}-color-${colorItem[0]}`, colorItem[1]);
      themeColorGradient(`--${_namespace}-color-${colorItem[0]}-light-#level#`, "lighten", colorItem[1]);
      setPropertyColor(`--${_namespace}-color-${colorItem[0]}-dark-2`, colorItem[1], "darken");
    })

    // 设置自定义颜色
    const _mynamespace = 'sf'
    // setPropertyColor(`--${_mynamespace}-primary-color`, colorMap[0][1]);
    // ['', '1a', '26', '4d'] [0, 9, 8.5, 7]
    ;['', '1a', '26', '4d'].forEach((item: string, index: number) => {
      if (index === 0) {
        document.documentElement.style.setProperty(`--${_mynamespace}-primary-color`, colorMap[0][1])
      } else {
        // setPropertyColor(`--${_mynamespace}-primary-color-opacity${index}`, `${colorMap[0][1]}`, "lighten", item)
        document.documentElement.style.setProperty(`--${_mynamespace}-primary-color-opacity${index}`, `${colorMap[0][1]}${item}`);
      }
    })

  }

  /**
 * 将css3变量设置到document中方便全局调用
 */
  const setPropertyColor = (varName: string, color: string, funName = 'lighten' as string, level = 0 as number) => {
    level = level ? level : 0;
    funName = funName ? funName : "lighten";
    document.documentElement.style.setProperty(
      varName,
      ColorUnit[funName](color, level / 10)
    );
  }

  /**
   * 生成主色的其余渐变色并修改对应CSS3变量值
   */
  const themeColorGradient = (varName: string, funName: string, themeColor: string) => {
    themeColor = themeColor ? themeColor : DEFAULT_PRIMARY;
    const themeLevel = [3, 5, 7, 8, 9];

    themeLevel.forEach(function (level: number) {
      setPropertyColor(
        varName.replace("#level#", `${level}`),
        themeColor,
        funName,
        level
      );
    });
  }

  return {
    themeConfig,
    setThemeColor,
    setThemePrimaryColor,
    setThemeConfig,
  }
},
  {
    persist: {
      afterRestore: (ctx) => {
        console.log(`刚刚恢复完 '${ctx.store.$id}'`, ctx.store)
        const color = ctx.store.$state.themeConfig.primary || DEFAULT_PRIMARY
        ctx.store.setThemeColor([['primary', color]])
      },
    }
  }
)