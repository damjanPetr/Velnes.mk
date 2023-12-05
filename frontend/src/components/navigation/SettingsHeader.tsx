import { Outlet } from "react-router-dom";

type Props = {
  title: string;
};
function SettingsHeader({ title }: Props) {
  return (
    <div className="py-5 pl-4">
      <div className="border-b border-b-gray-04">
        <h3 className="">{title}</h3>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
export default SettingsHeader;
