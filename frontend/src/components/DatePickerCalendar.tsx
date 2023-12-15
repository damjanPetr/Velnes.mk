import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { useState } from "react";
import { capitalizeFirstLetter } from "./../helpers/functions";

function DatePickerCalendar() {
  const today = startOfToday();
  const days = ["s", "m", "t", "w", "t", "f", "s"];
  const colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];

  const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
  const firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: endOfWeek(endOfMonth(firstDayOfMonth)),
  });

  const getPrevMonth = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
    setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
  };

  const getNextMonth = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
    setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };

  return (
    <div className="  flex items-center justify-center rounded-lg border border-gray-04">
      <div className="w-[400px]">
        <div className="flex items-center justify-between py-2.5">
          <div className="mx-auto flex items-center justify-evenly gap-6 sm:gap-12">
            <div className="h-6 w-6 cursor-pointer" onClick={getPrevMonth}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2929 6.29297L7.58594 12L13.2929 17.707L14.7069 16.293L10.4139 12L14.7069 7.70697L13.2929 6.29297Z"
                  fill="#1B1B1B"
                />
              </svg>
            </div>
            <p className="text-xl font-semibold">
              {format(firstDayOfMonth, "MMMM yyyy")}
            </p>
            <div className="h-6 w-6 cursor-pointer" onClick={getNextMonth}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.707 17.707L16.414 12L10.707 6.29297L9.29297 7.70697L13.586 12L9.29297 16.293L10.707 17.707Z"
                  fill="#1B1B1B"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-7 place-items-center  gap-2 ">
          {days.map((day, idx) => {
            return (
              <div key={idx} className="p-2.5 font-semibold">
                {capitalizeFirstLetter(day)}
              </div>
            );
          })}
        </div>
        <div className="mt-[16px] grid grid-cols-7 place-items-center gap-2">
          {daysInMonth.map((day, idx) => {
            return (
              <div key={idx} className={colStartClasses[getDay(day)]}>
                <p
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full font-semibold  hover:text-white ${
                    isSameMonth(day, today) ? "text-black" : "text-gray-02"
                  } ${!isToday(day) && "hover:bg-blue-500"} ${
                    isToday(day) && "bg-denum text-white"
                  }`}
                >
                  {format(day, "d")}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DatePickerCalendar;
