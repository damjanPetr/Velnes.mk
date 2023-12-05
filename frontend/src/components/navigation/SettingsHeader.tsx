import { Outlet } from "react-router-dom";

type Props = {
  title: string;
  children?: React.ReactNode;
};
function SettingsHeader({ title, children }: Props) {
  return (
    <div className="">
      <div className="border-b border-b-gray-04 px-[16px] py-[20px] ">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="">{children}</div>
    </div>
  );
}
export default SettingsHeader;
