"use client"

import css from "./NavBar.module.css"
import Link from "next/link";
import {usePathname} from "next/navigation";

const navigationMenu = [
    {name: "Home", path: "/"},
    {name: "Catalog", path: "/catalog"}
];

const NavBar = () => {
    const pathname = usePathname();

    return (
        <ul className={css.navList}>
            {navigationMenu.map((item, index) =>
                <li className={`${css.navItem} ${pathname === item.path ? css.active : ""}`} key={index}>
                    <Link href={item.path} className={css.navLink}>{item.name}</Link>
                </li>
            )}
        </ul>
    )
}
export default NavBar;