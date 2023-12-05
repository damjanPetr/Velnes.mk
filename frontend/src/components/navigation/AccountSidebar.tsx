import { NavLink } from "react-router-dom";

function AccountSidebar() {
  return (
    <div className="">
      <div className="px-6 py-4">
        <NavLink
          to="/account"
          className={({ isActive }) => {
            return "text-lg font-medium" + isActive ? "bg-lavender" : "";
          }}
        ></NavLink>
      </div>
    </div>
  );
}
export default AccountSidebar;
