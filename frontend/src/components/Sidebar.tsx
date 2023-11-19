import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex flex-none flex-col   gap-[5px] bg-denum p-[5px]">
      <div className="rounded-lg p-4 fcen ">
        <Link to="">
          <img
            className="h-[25px] w-[26px] "
            src="icons/navigation/logo.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="rounded-lg p-4 fcen ">
        <Link to="calendar">
          <img
            className="h-[25px] w-[26px] "
            src="icons/navigation/calendar.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="rounded-lg p-4 fcen ">
        <Link to="service">
          <img
            className="h-[25px] w-[26px] "
            src="icons/navigation/cash register.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="rounded-lg p-4 fcen ">
        <Link to="products">
          <img
            className="h-[25px] w-[26px] "
            src="icons/navigation/products.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="rounded-lg p-4 fcen ">
        <Link to="customers">
          <img
            className="h-[25px] w-[26px] "
            src="icons/navigation/customers.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="rounded-lg p-4 fcen ">
        <Link to="marketing">
          <img
            className="h-[25px] w-[26px] "
            src="icons/navigation/communication.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="rounded-lg p-4 fcen ">
        <Link to="reports">
          <img
            className="h-[25px] w-[26px] "
            src="icons/navigation/reports.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="flex flex-1 flex-col justify-end">
        <div className="rounded-lg p-4 fcen ">
          <Link to="settings">
            <img
              className="h-[25px] w-[26px] "
              src="icons/navigation/settings.svg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
