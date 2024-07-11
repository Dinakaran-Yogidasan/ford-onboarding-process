"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navStyles from "./navItems.module.css";
import { getUpdatedNavItems } from "../getUpdatedNavItems/getUpdatedNavItems";

export default function NavItems() {
  const pathname = usePathname();
  const linkClasses = (path) => (
      pathname === `/${path}` ? `${navStyles.link} ${navStyles['is-active']}` : navStyles.link
  );

  return (
    <section className={navStyles.navitems}>
      <Link href="/"><h2>Ford Onboarding Process</h2></Link>
      <ul>
        {getUpdatedNavItems.map(({ id, name }) => (
          <li key={id}>
            <Link className={linkClasses(id)} href={`/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
