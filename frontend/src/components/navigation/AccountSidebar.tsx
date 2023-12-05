import { NavLink } from "react-router-dom";

function AccountSidebar({ toggle }: { toggle: boolean }) {
  return (
    <div
      className={`absolute -left-20 top-[90%]   min-w-[200px] rounded-lg shadow-xl  transition-opacity delay-0 ${
        toggle || "hidden"
      }`}
    >
      <div className="flex items-center gap-2.5 rounded-t-lg border-b border-gray-04 bg-white px-[16px] py-[10px]">
        <img src="icons/action/edit.svg" alt="" />
        <NavLink
          to="/account"
          className={({ isActive }) => {
            return `font-medium  ${isActive ? "" : ""}`;
          }}
        >
          Account Settings
        </NavLink>
      </div>

      <div className="flex items-center gap-2.5 border-b border-gray-04 bg-white px-[16px] py-[10px]">
        <img src="icons/action/plus.svg" alt="" />

        <NavLink
          to="/account"
          className={({ isActive }) => {
            return `font-medium  ${isActive ? "" : ""}`;
          }}
        >
          Invite coleagues
        </NavLink>
      </div>
      <div className="flex items-center gap-2.5 rounded-b-lg  bg-white px-[16px] py-[10px]">
        <img src="icons/action/checkout.svg" alt="" />
        <NavLink
          to="/account"
          className={({ isActive }) => {
            return `font-medium  ${isActive ? "" : ""}`;
          }}
        >
          Billing
        </NavLink>
      </div>
      <div className="flex items-center gap-2.5 border-b border-gray-04 bg-white px-[16px] py-[10px]">
        <img src="icons/action/logout.svg" alt="" />
        <NavLink
          to="/account"
          className={({ isActive }) => {
            return `font-medium  ${isActive ? "" : ""}`;
          }}
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
}
export default AccountSidebar;
