import { useState } from "react";
import { Outlet } from "react-router-dom";
import Checkbox from "../../buttons/Checkbox";
type Props = {
  data: {
    name: string;
  };
};
function EmployeeCell({}: Props) {
  const [selected, setSelected] = useState<boolean>(false);
  const [inactive, setInactive] = useState<boolean>(false);

  return (
    <div
      className={
        "flex items-center justify-between border-b border-gray-04 p-5 pl-[40px] hover:bg-lavender " +
        selected
          ? ""
          : "" + inactive
            ? " text-gray-04"
            : ""
      }
    >
      <div className="flex items-center">
        <Checkbox />

        <div className="font-semibold ">{text}</div>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
export default EmployeeCell;
