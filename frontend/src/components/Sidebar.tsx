function Sidebar() {
  return (
    <div className="bg-marian-blue flex flex-col gap-[5px] p-[5px] ">
      <div className="fcen p-4 rounded-lg ">
        <img
          className="w-[26px] h-[25px] flex-none "
          src="icons/navigation/logo.svg"
          alt=""
        />
      </div>

      <div className="fcen p-4 rounded-lg ">
        <img
          className="w-[26px] h-[25px] "
          src="icons/navigation/calendar.svg"
          alt=""
        />
      </div>

      <div className="fcen p-4 rounded-lg ">
        <img
          className="w-[26px] h-[25px] "
          src="icons/navigation/cash register.svg"
          alt=""
        />
      </div>

      <div className="fcen p-4 rounded-lg ">
        <img
          className="w-[26px] h-[25px] "
          src="icons/navigation/products.svg"
          alt=""
        />
      </div>

      <div className="fcen p-4 rounded-lg ">
        <img
          className="w-[26px] h-[25px] "
          src="icons/navigation/customers.svg"
          alt=""
        />
      </div>

      <div className="fcen p-4 rounded-lg ">
        <img
          className="w-[26px] h-[25px] "
          src="icons/navigation/communication.svg"
          alt=""
        />
      </div>

      <div className="fcen p-4 rounded-lg ">
        <img
          className="w-[26px] h-[25px] "
          src="icons/navigation/reports.svg"
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col justify-end">
        <div className="fcen p-4 rounded-lg ">
          <img
            className="w-[26px] h-[25px] "
            src="icons/navigation/settings.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
