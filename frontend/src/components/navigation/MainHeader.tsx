import { useState } from "react";
import AccountSidebar from "./AccountSidebar";

function MainHeader() {
  const [openAccountDropDown, setOpenAccountDropDown] =
    useState<boolean>(false);
  return (
    <nav className="relative pb-4 pt-[14px]">
      <ul className="flex items-center gap-[25px]">
        <li>
          <a href="">
            <img src="/icons/common/search.svg" alt="" className="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/icons/common/notification.svg" alt="" />
          </a>
        </li>
        <li>
          <button
            href=""
            className="fcen"
            onClick={() => {
              setOpenAccountDropDown(!openAccountDropDown);
            }}
          >
            <div className="bg-rosy-brown h-10 w-10 rounded-full "></div>
          </button>
        </li>
      </ul>
      {<AccountSidebar toggle={openAccountDropDown} />}
    </nav>
  );
}
export default MainHeader;
