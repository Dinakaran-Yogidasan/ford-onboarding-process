import navStyles from "./navItems.module.css";

export default function NavItemDetail({
    name,
    description
}) {

  return (
    <div className={navStyles.navcontent}>
      <h3>{name}</h3>
      <div dangerouslySetInnerHTML={{
          __html: description
      }}></div>
    </div>
  );
}
