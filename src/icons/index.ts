import { readFileSync, readdirSync } from 'fs';

let idPerfix = ''
const svgTitle = /<svg([^>+].*?)>/
const clearHeightWidth = /(width|height)="([^>+].*?)"/g
const hasViewBox = /(viewBox="[^>+].*?")/g
const clearReturn = /(\r)|(\n)/g

// vite-plugin-svg-icons 插件

/**
 * 在指定目录中查找所有SVG文件并返回SVG内容的数组
 * @param e - 要查找的目录路径
 * @returns SVG内容的数组
 */
function svgFind (e: any): any{
    const arr = []
    const dirents = readdirSync(e, {
        withFileTypes: true // 将文件作为 fs.Dirent 对象返回
        // fs.Dirent 是目录项（可以是文件或目录中的子目录）的表示，通过读取 fs.Dir 的返回。目录项是文件名和文件类型对的组合
    })
    for (const dirent of dirents) {
        if (dirent.isDirectory()) { // 判断是否是一个目录
            arr.push(...svgFind(e + dirent.name + '/'))
        } else {
            const svg = readFileSync(e + dirent.name)
                .toString()
                .replace(clearReturn, '')
                .replace(svgTitle, ($1: any, $2: any) => {
                    let width = 0,
                        height = 0,
                        content = $2.replace(clearHeightWidth, (s1: any, s2: any, s3: any) => {
                            if (s2 === 'width') width = s3
                            else if (s2 === 'height') height = s3
                            return ''
                        })
                    if (!hasViewBox.test($2)) content += `viewBox="0 0 ${width} ${height}"`
                    return `<symbol id="${idPerfix}-${dirent.name.replace('.svg', '')}" ${content}>`
                }).replace('</svg>', '</symbol>')
            arr.push(svg)
        }
    }
    return arr
}

// 生成 svg
export const createSvg = (path: any, perfix = 'icon') => {
    if (path === '') return
    idPerfix = perfix
    const res = svgFind(path)
    return {
        name: 'svg-transform',
        transformIndexHtml(dom: String) {
            return dom.replace(
                '<body>',
                `<body><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">${res.join('')}</svg>`
            )
        }
    }
}