import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex flex-none flex-col   gap-[5px] bg-denum p-[5px] ">
      <NavLink
        to="/welcome"
        className="rounded-lg p-4 transition-colors fcen [&.active]:bg-marian-blue "
      >
        <div>
          <img
            className="h-[25px] w-[26px] "
            src="icons/navigation/logo.svg"
            alt=""
          />
        </div>
      </NavLink>

      <NavLink
        to="calendar"
        className=": rounded-lg p-4 transition-colors fcen [&.active]:bg-marian-blue "
      >
        <div className={""}>
          <img
            className="h-[25px] w-[26px] "
            src="icons/navigation/calendar.svg"
            alt=""
          />
        </div>
      </NavLink>

      {/* <NavLink
        to="service"
        className="rounded-lg p-4 transition-colors fcen [&.active]:bg-marian-blue "
      >
        <div>
          <img
            className="h-[25px] w-[26px] "
            src="icons/navigation/cash register.svg"
            alt=""
          />
        </div>
      </NavLink> */}

      <NavLink
        to="products"
        className="rounded-lg p-4 transition-colors fcen [&.active]:bg-marian-blue "
      >
        <div>
          <img
            className="h-[25px] w-[26px] "
            src="icons/navigation/products.svg"
            alt=""
          />
        </div>
      </NavLink>

      <NavLink
        to="customers"
        className="rounded-lg p-4 transition-colors fcen [&.active]:bg-marian-blue "
      >
        <div>
          <img
            className="h-[25px] w-[26px] "
            src="icons/navigation/customers.svg"
            alt=""
          />
        </div>
      </NavLink>

      {/* <NavLink
        to="marketing"
        className="rounded-lg p-4 transition-colors fcen [&.active]:bg-marian-blue "
      >
        <div>
          <img
            className="h-[25px] w-[26px] "
            src="icons/navigation/communication.svg"
            alt=""
          />
        </div>
      </NavLink> */}

      <NavLink
        to="reports"
        className="rounded-lg p-4 transition-colors fcen [&.active]:bg-marian-blue "
      >
        <div>
          <img
            className="h-[25px] w-[26px] "
            src="icons/navigation/reports.svg"
            alt=""
          />
        </div>
      </NavLink>

      <div className="flex flex-1 flex-col justify-end">
        <NavLink
          to="settings"
          className="rounded-lg p-4 transition-colors fcen [&.active]:bg-marian-blue  "
        >
          <div>
            <img
              className="h-[25px] w-[26px] "
              src="icons/navigation/settings.svg"
              alt=""
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
}
export default Sidebar;
