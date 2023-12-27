// file: src/unit/ColorUnit.js
// 代码载取来至：https://gitee.com/lolicode/scui/blob/master/src/utils/color.js
export default {
	//hex颜色转rgb颜色
	HexToRgb(str: string) {
		str = str.replace("#", "")
		const hxs: any = str.match(/../g)
		for (let i = 0; i < 3; i++) hxs[i] = parseInt(hxs[i], 16)
		return hxs
	},
	//rgb颜色转hex颜色
	RgbToHex(r: number, g: number, b: number) {
		const hexs = [r.toString(16), g.toString(16), b.toString(16)]
		for (let i = 0; i < 3; i++) {
			if (hexs[i].length == 1) hexs[i] = `0${hexs[i]}`
		}
		return `#${hexs.join('')}`;
	},
	//加深
	"darken": function (color: string, level: number) {
		const rgbc: number[] = this.HexToRgb(color)
		for (let i = 0; i < 3; i++) rgbc[i] = Math.floor(rgbc[i] * (1 - level))
		return this.RgbToHex(rgbc[0], rgbc[1], rgbc[2])
	},
	//变淡
	"lighten": function (color: string, level: number) {
		const rgbc: number[] = this.HexToRgb(color)
		for (let i = 0; i < 3; i++) rgbc[i] = Math.floor((255 - rgbc[i]) * level + rgbc[i])
		return this.RgbToHex(rgbc[0], rgbc[1], rgbc[2])
	},
	getLightColor(color: string, level: number) {
		const reg = /^#?[0-9A-Fa-f]{6}$/
		if (!reg.test(color)) return
		const rgb = this.HexToRgb(color)
	  
		for (let i = 0; i < 3; i++)
		  rgb[i] = Math.round(255 * level + rgb[i] * (1 - level))
	  
		return this.RgbToHex(rgb[0], rgb[1], rgb[2])
	},
	getDarkColor(color: string, level: number) {
		const reg = /^#?[0-9A-Fa-f]{6}$/
		if (!reg.test(color)) return
		const rgb = this.HexToRgb(color)
	  
		for (let i = 0; i < 3; i++)
		  rgb[i] = Math.round(20.5 * level + rgb[i] * (1 - level))
	  
		return this.RgbToHex(rgb[0], rgb[1], rgb[2])
	}
} as { [key: string]: any }
