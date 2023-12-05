import { NavLink } from "react-router-dom";

type Props = { name: string; path: string }[];

function TabHeader(props: Props) {
  return (
    <div className="flex items-center gap-5">
      {props.map(({ name, path }) => {
        return (
          <div className="px-2.5 pb-5 pt-2.5">
            <NavLink
              to={`${path}`}
              className={({ isActive }) => {
                return "text-lg font-medium " + isActive
                  ? "border-b-[3px]"
                  : "";
              }}
            >
              {name}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}
export default TabHeader;
