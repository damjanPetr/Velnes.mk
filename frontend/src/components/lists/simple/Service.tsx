import { Outlet } from "react-router-dom";

import { useState } from "react";
type Props = {
  title: string;
};

function Service({ title }: Props) {
  const [inactive, setInactive] = useState<boolean>(false);
  return (
    <div
      className={
        "flex  items-center justify-between rounded-lg border-b border-gray-04 p-5 hover:bg-alice-blue" +
        (inactive ? " text-gray-02" : "")
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
export default Service;
