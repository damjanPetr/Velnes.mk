type Props = {
  date: Date;
};
function DatePicker({ date }: Props) {
  //   // Get the first day of the month
  //   let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

  //   // Calculate the day of the week for the first day of the month (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  //   let dayOfWeek = firstDay.getDay();

  //   let daysToAdd = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;

  //   // Calculate the number of days in the month
  //   let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  //   let numDays = lastDay.getDate();

  //   let firstSunday = new Date(
  //     date.getFullYear(),
  //     date.getMonth(),
  //     1 + daysToAdd,
  //   );

  //   // Get the day of the week for the first day
  //   let firstDayOfWeek = firstDay.getDay();

  //   let daysLeft = Math.ceil(
  //     ((lastDay as any) - (firstSunday as any)) / (1000 * 60 * 60 * 24),
  //   );

  //   const rows = [];

  //   rows.push();
  //   function chunk() {
  //     let temp = [];
  //     for (let i = 0, len = numDays; i < len; i++) {
  //       if (i % 7 === 0) {
  //         rows.push(temp);
  //         temp = [];
  //       }
  //       temp.push(firstDay.getDate() + i);
  //     }
  //   }
  //   chunk();

  //   console.log(rows);

  return (
    <div className="absolute left-0 top-[calc(100%+5px)] flex w-[300px] flex-col items-center justify-between gap-4">
      {/* Uppetr */}
      <div className="flex items-center justify-between py-2.5">
        <div className="fcen">
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
        <div className="font-bold">
          {new Intl.DateTimeFormat(navigator.language, {
            month: "long",
            year: "numeric",
          }).format(date)}
        </div>
        <div className="fcen">
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
      {/* Middle  days*/}
      <div className="flex w-full  items-center justify-between  text-sm font-medium  text-gray-01 dirChildren:p-2.5">
        <div className="">
          <p>S</p>
        </div>
        <div className="">
          <p>M</p>
        </div>
        <div className="">
          <p>T</p>
        </div>
        <div className="">
          <p>W</p>
        </div>
        <div className="">
          <p>T</p>
        </div>
        <div className="">
          <p>F</p>
        </div>
        <div className="">
          <p>S</p>
        </div>
      </div>
      {/* Calendar  days*/}
      <div className="">
        {rows.map((row: number[]) => (
          <div className="flex items-center justify-between gap-4 p-2.5">
            {row.map((day: any) => (
              <div
                className={`p-1 font-medium
                ${
                  day == date.getDate()
                    ? " rounded-full bg-denum p-1 text-white"
                    : ""
                }
                ${day < date.getDate() ? "text-gray-02" : "text-black"} 
                `}
              >
                {day}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default DatePicker;
