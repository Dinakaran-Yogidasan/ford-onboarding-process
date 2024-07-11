"use client";

import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import NavItemDetail from "../../components/navigation/navItemDetail";
import { getUpdatedNavItems } from "../../components/getUpdatedNavItems/getUpdatedNavItems";
import navStyles from "../../components/navigation/navItems.module.css";
import Link from "next/link";

export default function DetailPage({ params }) {
  const pathname = usePathname();
  const trimPath = pathname.replace("/", "");
  const result = [];
  const prevResult = [];
  const nextResult = [];
  const navItemsArr = getUpdatedNavItems.map((item) => item.id);
  const navItemIndex = navItemsArr.findIndex((x) => x === trimPath);

  getUpdatedNavItems.forEach((item, index) => {
    if (item.id === trimPath) {
      result.push(item);
    }
    if (
      navItemIndex >= 0 &&
      navItemIndex < navItemsArr.length - 1 &&
      index === navItemIndex + 1
    ) {
      nextResult.push(item);
    }
    if (
      navItemIndex <= navItemsArr.length &&
      navItemIndex !== 0 &&
      index === navItemIndex - 1
    ) {
      prevResult.push(item);
    }
  });

  if (!result[0]) {
    notFound();
  }
  const { id, name, description } = result[0];

  return (
    <>
      <NavItemDetail id={id} name={name} description={description} />

      <div className={navStyles.pager}>
        <section>
          {prevResult[0] && (
            <Link className="link" href={`/${prevResult[0]?.id}`}>
              &lt; {prevResult[0]?.name}
            </Link>
          )}
        </section>
        <section>
          {nextResult[0] && (
            <Link className="link" href={`/${nextResult[0]?.id}`}>
              {nextResult[0]?.name} &gt;
            </Link>
          )}
        </section>
      </div>
    </>
  );
}
