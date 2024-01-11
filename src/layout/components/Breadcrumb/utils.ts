
import { type RouteRecordRaw } from 'vue-router'

/**
 * 根据路由name获取顶级菜单
 * @param routeName 当前路由的name
 * @param menus 菜单数据
 */
export const getTopLevelMenu = (routeName: string, menus: RouteRecordRaw[]): RouteRecordRaw | undefined => {
    return menus.find(item => {
        if (item.name == routeName) return true;
        if (Array.isArray(item.children)) {
            return getTopLevelMenu(routeName, item.children)
        }
        return false
    })
}


/**
 * 获取面包屑数据
 * @param activeKey - 当前页面路由的key
 * @param menus - 菜单数据
 * @param rootPath - 根路由路径
 */
export function getBreadcrumbByRouteKey(activeKey: string, menus: RouteRecordRaw[], rootPath: string) {
    const breadcrumbMenu = getBreadcrumbMenu(activeKey, menus);
    console.log(menus, breadcrumbMenu)
    // const breadcrumb = breadcrumbMenu.map(item => transformBreadcrumbMenuToBreadcrumb(item, rootPath));
    return breadcrumbMenu;
  }
  
  /**
   * 根据菜单数据获取面包屑格式的菜单
   * @param activeKey - 当前页面路由的key
   * @param menus - 菜单数据
   */
  function getBreadcrumbMenu(activeKey: string, menus: RouteRecordRaw[]) {
    const breadcrumbMenu: RouteRecordRaw[] = [];
    const topLevelMenu = getTopLevelMenu(activeKey, menus);
    console.log(topLevelMenu)
    const options = topLevelMenu ? getBreadcrumbMenuItem(activeKey, topLevelMenu as RouteRecordRaw) : [];
    console.log(options)
    breadcrumbMenu.push(...options);
    return breadcrumbMenu;
  }
  
  /**
   * 根据单个菜单数据获取面包屑格式的菜单
   * @param activeKey - 当前页面路由的key
   * @param menu - 单个菜单数据
   */
  function getBreadcrumbMenuItem(activeKey: string, menu: RouteRecordRaw) {
    const breadcrumbMenu: RouteRecordRaw[] = [];
    console.log(activeKey, menu.name, menu.children)
    if (activeKey === menu.name) {
      breadcrumbMenu.push(menu);
    }
    if (menu.children && menu.children.length) {
      breadcrumbMenu.push(menu);
      breadcrumbMenu.push(
        ...menu.children.map(item => getBreadcrumbMenuItem(activeKey, item as RouteRecordRaw)).flat(1)
      );
    }
    console.log(breadcrumbMenu)
    return breadcrumbMenu;
  }
  
  /**
   * 将面包屑格式的菜单数据转换成面包屑数据
   * @param menu - 单个菜单数据
   * @param rootPath - 根路由路径
   */
//   function transformBreadcrumbMenuToBreadcrumb(menu: RouteRecordRaw, rootPath: string) {
//     const hasChildren = Boolean(menu.children && menu.children.length);
//     const breadcrumb: RouteRecordRaw = {
//       name: menu.name,
//     //   label: menu.name as string,
//     //   routeName: menu.name,
//     //   disabled: menu.path === rootPath,
//     //   hasChildren,
//     //   i18nTitle: menu.i18nTitle
//     };
//     if (menu.icon) {
//       breadcrumb.icon = menu.icon;
//     }
//     if (hasChildren) {
//       breadcrumb.options = menu.children?.map(item =>
//         transformBreadcrumbMenuToBreadcrumb(item as App.GlobalMenuOption, rootPath)
//       ) as NonNullable<App.GlobalBreadcrumb['options']>;
//     }
//     return breadcrumb;
//   }
  