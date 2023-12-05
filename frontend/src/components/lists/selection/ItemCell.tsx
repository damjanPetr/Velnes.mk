import { Outlet } from "react-router-dom";

import { useState } from "react";
import Checkbox from "../../buttons/Checkbox";

type Props = {
  text: string;
};

function ItemCell({ text }: Props) {
  const [selected, setSelected] = useState<boolean>(false);
  const [inactive, setInactive] = useState<boolean>(false);

  return (
    <div
      className={
        "flex items-center justify-between border-t border-gray-04 p-4 pl-[30px] hover:bg-lavender " +
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
export default ItemCell;
