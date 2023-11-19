function Sidebar() {
  return (
    <div className="flex flex-none flex-col   gap-[5px] bg-denum p-[5px]">
      <div className="rounded-lg p-4 fcen ">
        <img
          className="h-[25px] w-[26px] "
          src="icons/navigation/logo.svg"
          alt=""
        />
      </div>

      <div className="rounded-lg p-4 fcen ">
        <img
          className="h-[25px] w-[26px] "
          src="icons/navigation/calendar.svg"
          alt=""
        />
      </div>

      <div className="rounded-lg p-4 fcen ">
        <img
          className="h-[25px] w-[26px] "
          src="icons/navigation/cash register.svg"
          alt=""
        />
      </div>

      <div className="rounded-lg p-4 fcen ">
        <img
          className="h-[25px] w-[26px] "
          src="icons/navigation/products.svg"
          alt=""
        />
      </div>

      <div className="rounded-lg p-4 fcen ">
        <img
          className="h-[25px] w-[26px] "
          src="icons/navigation/customers.svg"
          alt=""
        />
      </div>

      <div className="rounded-lg p-4 fcen ">
        <img
          className="h-[25px] w-[26px] "
          src="icons/navigation/communication.svg"
          alt=""
        />
      </div>

      <div className="rounded-lg p-4 fcen ">
        <img
          className="h-[25px] w-[26px] "
          src="icons/navigation/reports.svg"
          alt=""
        />
      </div>

      <div className="flex flex-1 flex-col justify-end">
        <div className="rounded-lg p-4 fcen ">
          <img
            className="h-[25px] w-[26px] "
            src="icons/navigation/settings.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
