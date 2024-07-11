import { navItems } from "../../app/data";

export const getUpdatedNavItems = navItems.map((item) => ({
    ...item,
    id: item.name.replaceAll(' ', '-').toLowerCase()
}));
