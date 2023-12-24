import { Outlet } from "react-router-dom";
import { useState } from "react";

type Props = {
  title: string;
};
function ServiceCategory({ title }: Props) {
  const [inactive, setInactive] = useState<boolean>(false);

  return (
    <div
      className={
        "flex  items-center justify-between rounded-lg border border-sunset  p-5 hover:bg-sunset " +
        (inactive ? " bg-sunset text-gray-02" : "bg-sunset")
      }
    >
      <div className="">
        <p className="font-bold">{title}</p>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
export default ServiceCategory;
