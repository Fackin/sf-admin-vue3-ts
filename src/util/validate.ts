/** 判断是否是外链 */
export const isExternal = (path: string) => {
    const reg = /^(https?:|mailto:|tel:)/
    return reg.test(path)
}

