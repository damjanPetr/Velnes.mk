import { Outlet } from "react-router-dom";

function SettingsSidebar() {
  return (
    <div className="flex flex-col items-center gap-5 p-2.5">
      <Outlet />
    </div>
  );
}
export default SettingsSidebar;
