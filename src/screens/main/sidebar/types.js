// @flow
export type ParamType = {
    id: number,
    title: string
};
export type SubMenuType = {
    key: number,
    name: string,
    route: string,
    icon: string,
    param?: ParamType
};

export type MenuType = {
    key: number,
    type: "Route" | "SignOut",
    name: string,
    route: string,
    icon: string,
    bg: string,
    collapsed?: boolean,
    submenu?: Array<SubMenuType>,
    badge?: number
};
