import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePickerCalendar from "../components/DatePickerCalendar";
import LayerScreen from "../components/LayerScreen";
import Button from "../components/buttons/Button";
import Checkbox from "../components/buttons/Checkbox";
import StandardBtn from "../components/buttons/StandardBtn";
import StandardDropdownCell from "../components/dropdown/StandardDropdownCell";
import Input from "../components/inputs/Input";
import InputIcon from "../components/inputs/InputIcon";
import Header from "../components/navigation/Header";
import PopUpTop from "../components/navigation/PopUpTop";
import axios from "../helpers/axios";
import { appontimentsProps, resourcesProps, userProps } from "../props";
import { roomsProps, toolsProps } from "../router";
import { servicesProps } from "../servicesProps";

export type CalendarProps = {
  children?: React.ReactNode;
};

export async function AppointmentsLoader() {
  const res = await axios.get("/api/appointments");
  return res.data;
}

export async function ServicesLoader() {
  const res = await axios.get("/api/services");
  return res.data;
}

export async function ResourcesLoader() {
  const res = await axios.get("/api/resources");
  return res.data;
}

export async function UsersLoader() {
  const res = await axios.get("/api/users");
  return res.data;
}

export async function toolsLoader() {
  const res = await axios.get("/api/tools");
  return res.data;
}
export async function roomsLoader() {
  const res = await axios.get("/api/rooms");
  return res.data;
}

function Calendar() {
  const [datePicker, setDatePicker] = useState<boolean>(false);
  const [screen, setScreen] = useState<boolean>(false);
  const [buttonDate, setButtonDate] = useState<string>("Today");

  const [leftCalendarDate, setLeftCalendarDate] = useState<string>(
    new Date().toISOString(),
  );
  const [rightCalendarDate, setRightCalendarDate] = useState<string>(
    new Date().toISOString(),
  );

  console.log(leftCalendarDate);
  const [userPlaceholder, setUserPlaceholder] = useState<{
    value: string;
    label: string;
  }>({ value: "all", label: "All Employees" });

  const [resourcePlaceholder, setResourcePlaceholder] = useState<{
    value: string;
    label: string;
  }>({ value: "all", label: "All Resources" });

  const [timePlaceholder, setTimePlaceholder] = useState<{
    value: string;
    label: string;
  }>({ value: "week", label: "Week" });

  const { services, resources, appointments, users, tools, rooms } =
    useLoaderData() as {
      services: { data: servicesProps[] };
      resources: { data: resourcesProps[] };
      appointments: { data: appontimentsProps[] };
      users: { data: userProps[] };
      tools: { data: toolsProps[] };
      rooms: { data: roomsProps[] };
    };

  return (
    <div>
      <Header heading="Calendar">
        <svg
          width="30"
          height="29"
          className="fill-gray-01"
          viewBox="0 0 30 29"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.0001 18.7915C13.9945 18.7915 13.03 18.392 12.319 17.681C11.6079 16.9699 11.2084 16.0055 11.2084 14.9998C11.2084 13.9942 11.6079 13.0298 12.319 12.3187C13.03 11.6077 13.9945 11.2082 15.0001 11.2082C16.0057 11.2082 16.9701 11.6077 17.6812 12.3187C18.3923 13.0298 18.7917 13.9942 18.7917 14.9998C18.7917 16.0055 18.3923 16.9699 17.6812 17.681C16.9701 18.392 16.0057 18.7915 15.0001 18.7915ZM23.0492 16.0507C23.0926 15.704 23.1251 15.3573 23.1251 14.9998C23.1251 14.6423 23.0926 14.2848 23.0492 13.9165L25.3351 12.1507C25.5409 11.9882 25.5951 11.6957 25.4651 11.4573L23.2984 7.70901C23.1684 7.47067 22.8759 7.37317 22.6376 7.47067L19.9401 8.55401C19.3767 8.13151 18.7917 7.76317 18.1092 7.49234L17.7084 4.62151C17.6864 4.49391 17.6199 4.37822 17.5208 4.29494C17.4216 4.21165 17.2962 4.16616 17.1667 4.16651H12.8334C12.5626 4.16651 12.3351 4.36151 12.2917 4.62151L11.8909 7.49234C11.2084 7.76317 10.6234 8.13151 10.0601 8.55401L7.36257 7.47067C7.12424 7.37317 6.83174 7.47067 6.70174 7.70901L4.53507 11.4573C4.39424 11.6957 4.45924 11.9882 4.66507 12.1507L6.9509 13.9165C6.90757 14.2848 6.87507 14.6423 6.87507 14.9998C6.87507 15.3573 6.90757 15.704 6.9509 16.0507L4.66507 17.849C4.45924 18.0115 4.39424 18.304 4.53507 18.5423L6.70174 22.2907C6.83174 22.529 7.12424 22.6157 7.36257 22.529L10.0601 21.4348C10.6234 21.8682 11.2084 22.2365 11.8909 22.5073L12.2917 25.3782C12.3351 25.6382 12.5626 25.8332 12.8334 25.8332H17.1667C17.4376 25.8332 17.6651 25.6382 17.7084 25.3782L18.1092 22.5073C18.7917 22.2257 19.3767 21.8682 19.9401 21.4348L22.6376 22.529C22.8759 22.6157 23.1684 22.529 23.2984 22.2907L25.4651 18.5423C25.5951 18.304 25.5409 18.0115 25.3351 17.849L23.0492 16.0507Z" />
        </svg>
      </Header>
      <div className="p-6">
        <section className="flex gap-5 ">
          <StandardBtn text={buttonDate} />
          {/* Time dropdow */}
          <div className="relative flex items-center justify-between gap-[5px] ">
            <div
              className="rounded-lg border  border-gray-03 px-0.5  py-[10px] fcen"
              onClick={() => {
                setLeftCalendarDate(
                  new Date(
                    new Date(leftCalendarDate).setDate(
                      new Date(leftCalendarDate).getDate() - 1,
                    ),
                  ) + "",
                );
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2929 6.29297L7.58594 12L13.2929 17.707L14.7069 16.293L10.4139 12L14.7069 7.70697L13.2929 6.29297Z"
                  fill="#1B1B1B"
                />
              </svg>
            </div>
            <div
              className=" font-bold"
              onClick={() => setDatePicker(!datePicker)}
            >
              <p className="rounded-lg border border-gray-03 p-2.5 pl-[14px]">
                {new Intl.DateTimeFormat("en-US").format(
                  new Date(leftCalendarDate),
                )}
                {" - "}
                {new Intl.DateTimeFormat("en-US").format(
                  new Date(rightCalendarDate),
                )}
              </p>
            </div>
            <div
              className="rounded-lg border  border-gray-03 px-0.5  py-[10px] fcen"
              onClick={() => {
                setLeftCalendarDate(
                  new Date(
                    new Date(leftCalendarDate).setDate(
                      new Date(leftCalendarDate).getDate() + 1,
                    ),
                  ) + "",
                );
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.707 17.707L16.414 12L10.707 6.29297L9.29297 7.70697L13.586 12L9.29297 16.293L10.707 17.707Z"
                  fill="#1B1B1B"
                />
              </svg>
            </div>
            {/* {datePicker && <DatePicker date={new Date(calendarDate)} />} */}
            {datePicker && (
              <div className="absolute -left-20 top-[calc(100%+20px)] flex items-center gap-10 rounded-lg bg-white p-5">
                <div className="">
                  <div className="">
                    <p className="mb-4 text-center font-bold text-gray-01">
                      From
                    </p>
                  </div>
                  <div className="relative">
                    <DatePickerCalendar />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <p className="mb-4 text-center font-bold text-gray-01">
                      TO
                    </p>
                  </div>
                  <div className="relative">
                    <DatePickerCalendar />
                  </div>
                </div>
              </div>
            )}
          </div>
          <InputIcon placeholder={timePlaceholder.label}>
            <div className="absolute top-[calc(100%+5px)] -ml-[14px]  w-full rounded-lg bg-white shadow-lg">
              <StandardDropdownCell
                handleClick={() => {
                  setTimePlaceholder({
                    label: "Day",
                    value: '"Day"',
                  });
                }}
                text="Day"
              ></StandardDropdownCell>
              <StandardDropdownCell
                handleClick={() => {
                  setTimePlaceholder({
                    label: "Week",
                    value: '"week"',
                  });
                }}
                text="Week"
              ></StandardDropdownCell>

              <StandardDropdownCell
                handleClick={() => {
                  setTimePlaceholder({
                    label: "Month",
                    value: '"month"',
                  });
                }}
                text="Month"
              ></StandardDropdownCell>
            </div>
          </InputIcon>
          <InputIcon
            optionalCss="w-[200px]"
            icon={
              userPlaceholder.label === "All Employees" ? "people" : undefined
            }
            placeholder={userPlaceholder.label}
          >
            <div className="absolute top-[calc(100%+5px)] -ml-[14px]  w-full rounded-lg bg-white shadow-lg">
              {/* Default employer label */}
              <div
                className="flex items-center px-[16px] py-[10px]"
                onClick={() => {
                  setUserPlaceholder({
                    label: "All Employees",
                    value: "all",
                  });
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 4C11.6759 4 10.8703 4.24694 10.1851 4.7096C9.49992 5.17226 8.96587 5.82985 8.6505 6.59923C8.33514 7.3686 8.25262 8.2152 8.41339 9.03196C8.57417 9.84872 8.971 10.599 9.55372 11.1878C10.1364 11.7767 10.8789 12.1777 11.6871 12.3401C12.4954 12.5026 13.3332 12.4192 14.0945 12.1005C14.8559 11.7819 15.5066 11.2422 15.9645 10.5498C16.4223 9.85735 16.6667 9.04329 16.6667 8.21053C16.6667 7.09383 16.2277 6.02286 15.4463 5.23323C14.6649 4.44361 13.6051 4 12.5 4ZM12.5 10.7368C12.0055 10.7368 11.5222 10.5887 11.1111 10.3111C10.7 10.0335 10.3795 9.63893 10.1903 9.17731C10.0011 8.71568 9.95157 8.20772 10.048 7.71767C10.1445 7.22761 10.3826 6.77746 10.7322 6.42415C11.0819 6.07084 11.5273 5.83023 12.0123 5.73275C12.4972 5.63527 12.9999 5.6853 13.4567 5.87652C13.9135 6.06773 14.304 6.39153 14.5787 6.80698C14.8534 7.22243 15 7.71087 15 8.21053C15 8.88055 14.7366 9.52313 14.2678 9.9969C13.7989 10.4707 13.163 10.7368 12.5 10.7368ZM20 20V19.1579C20 17.5945 19.3854 16.0952 18.2915 14.9897C17.1975 13.8842 15.7138 13.2632 14.1667 13.2632H10.8333C9.28624 13.2632 7.80251 13.8842 6.70854 14.9897C5.61458 16.0952 5 17.5945 5 19.1579V20H6.66667V19.1579C6.66667 18.0412 7.10565 16.9702 7.88705 16.1806C8.66846 15.391 9.72826 14.9474 10.8333 14.9474H14.1667C15.2717 14.9474 16.3315 15.391 17.1129 16.1806C17.8943 16.9702 18.3333 18.0412 18.3333 19.1579V20H20Z"
                    fill="#7A7E87"
                  />
                </svg>
                <p className="flex-1 font-medium text-gray-01">All Employees</p>
              </div>
              {users.data.map((item) => {
                return (
                  <StandardDropdownCell
                    handleClick={() => {
                      setUserPlaceholder({
                        label: item.name.split(" ")[0],
                        value: item.id.toString(),
                      });
                    }}
                    key={item.id}
                    text={item.name.split(" ")[0]}
                  ></StandardDropdownCell>
                );
              })}
            </div>
          </InputIcon>

          {/* Resources dropdown */}
          <InputIcon
            icon={
              resourcePlaceholder.label === "All Resources"
                ? "scissors"
                : undefined
            }
            placeholder={resourcePlaceholder.label}
            optionalCss="w-[240px]"
          >
            <div className="absolute top-[calc(100%+5px)] -ml-[14px]  w-full rounded-lg bg-white shadow-lg">
              <div
                className="flex items-center px-[16px] py-[10px]"
                onClick={() => {
                  setResourcePlaceholder({
                    label: "All Resources",
                    value: "all",
                  });
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.75 4.75L13.25 9.25L14.75 10.75L20 5.5V4.75M12.5 11.875C12.4005 11.875 12.3052 11.8355 12.2348 11.7652C12.1645 11.6948 12.125 11.5995 12.125 11.5C12.125 11.4005 12.1645 11.3052 12.2348 11.2348C12.3052 11.1645 12.4005 11.125 12.5 11.125C12.5995 11.125 12.6948 11.1645 12.7652 11.2348C12.8355 11.3052 12.875 11.4005 12.875 11.5C12.875 11.5995 12.8355 11.6948 12.7652 11.7652C12.6948 11.8355 12.5995 11.875 12.5 11.875ZM8 17.5C7.60218 17.5 7.22064 17.342 6.93934 17.0607C6.65804 16.7794 6.5 16.3978 6.5 16C6.5 15.6022 6.65804 15.2206 6.93934 14.9393C7.22064 14.658 7.60218 14.5 8 14.5C8.39782 14.5 8.77936 14.658 9.06066 14.9393C9.34196 15.2206 9.5 15.6022 9.5 16C9.5 16.3978 9.34196 16.7794 9.06066 17.0607C8.77936 17.342 8.39782 17.5 8 17.5ZM8 8.5C7.60218 8.5 7.22064 8.34196 6.93934 8.06066C6.65804 7.77936 6.5 7.39782 6.5 7C6.5 6.60218 6.65804 6.22064 6.93934 5.93934C7.22064 5.65804 7.60218 5.5 8 5.5C8.39782 5.5 8.77936 5.65804 9.06066 5.93934C9.34196 6.22064 9.5 6.60218 9.5 7C9.5 7.39782 9.34196 7.77936 9.06066 8.06066C8.77936 8.34196 8.39782 8.5 8 8.5ZM10.73 8.23C10.9025 7.855 11 7.4425 11 7C11 6.20435 10.6839 5.44129 10.1213 4.87868C9.55871 4.31607 8.79565 4 8 4C7.20435 4 6.44129 4.31607 5.87868 4.87868C5.31607 5.44129 5 6.20435 5 7C5 7.79565 5.31607 8.55871 5.87868 9.12132C6.44129 9.68393 7.20435 10 8 10C8.4425 10 8.855 9.9025 9.23 9.73L11 11.5L9.23 13.27C8.855 13.0975 8.4425 13 8 13C7.20435 13 6.44129 13.3161 5.87868 13.8787C5.31607 14.4413 5 15.2044 5 16C5 16.7956 5.31607 17.5587 5.87868 18.1213C6.44129 18.6839 7.20435 19 8 19C8.79565 19 9.55871 18.6839 10.1213 18.1213C10.6839 17.5587 11 16.7956 11 16C11 15.5575 10.9025 15.145 10.73 14.77L12.5 13L17.75 18.25H20V17.5L10.73 8.23Z"
                    fill="#7A7E87"
                  />
                </svg>
                <p className="flex-1 font-medium text-gray-01">All Resources</p>
              </div>
              {/* rooms */}
              <div className="">
                <div className="p-2.5 font-bold text-gray-01">Rooms</div>
                <div className="">
                  {rooms.data.map((item) => {
                    return (
                      <StandardDropdownCell
                        handleClick={() => {
                          setResourcePlaceholder({
                            label: item.name,
                            value: item.id.toString(),
                          });
                        }}
                        key={item.id}
                        text={item.name.split(" ")[0]}
                      ></StandardDropdownCell>
                    );
                  })}
                </div>
              </div>
              {/* tools */}
              <div className="">
                <div className="self-start p-2.5 font-bold text-gray-01">
                  Tools
                </div>
                <div className="">
                  {tools.data.map((item) => {
                    return (
                      <StandardDropdownCell
                        handleClick={() => {
                          setResourcePlaceholder({
                            label: item.name,
                            value: item.id.toString(),
                          });
                        }}
                        key={item.id}
                        text={item.name.split(" ")[0]}
                      ></StandardDropdownCell>
                    );
                  })}
                </div>
              </div>
            </div>
          </InputIcon>
          <Button
            size="large"
            text="Create New"
            type="primary"
            handleClick={() => {
              setScreen(true);
            }}
            rightIcon
          ></Button>
        </section>
        {/* Calendar */}
        <section className="mt-[22px] "></section>
      </div>

      {screen && (
        <LayerScreen>
          <div className="min-w-[80vw] rounded-lg bg-gray-07">
            <PopUpTop
              text="Appointment"
              xHandleClick={() => {
                setScreen(false);
              }}
            ></PopUpTop>
            <div className="relative flex  ">
              {/* left */}
              <div className="sticky left-0 top-0 max-h-[calc(80vh)] basis-3/4  overflow-auto p-[30px]">
                <div className="rounded-lg border border-gray-04 bg-white p-5">
                  <div className="flex items-center  gap-5  dirChildren:flex-1 ">
                    <div className="">
                      <p className="mb-2.5 font-bold text-gray-01">Service</p>
                      <InputIcon placeholder="    "></InputIcon>
                    </div>
                    <div className="">
                      <p className="mb-2.5 font-bold text-gray-01">Duration</p>
                      <InputIcon placeholder="    "></InputIcon>
                    </div>
                    <div className="">
                      <p className="mb-2.5 font-bold text-gray-01">
                        Employee 1
                      </p>
                      <InputIcon placeholder="Select" icon="people"></InputIcon>
                    </div>
                    <div className="">
                      <p className="mb-2.5 font-bold text-gray-01">
                        Employee 2
                      </p>
                      <InputIcon placeholder="Select" icon="people"></InputIcon>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-between ">
                    <div className="flex items-center">
                      <p className="font-medium">Popular services</p>
                    </div>
                    <div className="p-1 fcen">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
                          fill="#7A7E87"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className=" flex-none">
                    <Button
                      text="Add Resource"
                      type="tertiary"
                      size="large"
                      leftIcon="plus"
                    />
                  </div>
                </div>
                {/* Room Section */}
                <div className="mt-[30px] rounded-lg border border-gray-04 bg-white p-5">
                  <div className="flex items-center justify-between gap-5 dirChildren:flex-auto  ">
                    <div className="">
                      <p className="mb-2.5 font-bold text-gray-01">ROOM</p>
                      <InputIcon placeholder="Select Room"></InputIcon>
                    </div>
                    <div className="">
                      <p className="mb-2.5 font-bold text-gray-01">TOOL 1</p>
                      <InputIcon placeholder="Select tool "></InputIcon>
                    </div>
                    <div className="">
                      <p className="mb-2.5 font-bold text-gray-01">TOOL 2</p>
                      <InputIcon placeholder="Select tool"></InputIcon>
                    </div>
                  </div>
                </div>
                {/* date section */}
                <div className="mt-[30px] rounded-lg border border-gray-04 bg-white p-5">
                  <div className="space-y-5">
                    <div className="">
                      <p className="mb-2.5 font-bold text-gray-01">
                        Date And Time
                      </p>
                      <div className="flex items-center justify-between gap-5">
                        <div className="flex-1">
                          <InputIcon placeholder="Select"></InputIcon>
                        </div>
                        <div className="">
                          <Input
                            id="date"
                            size="small"
                            type="text"
                            placeholder="00:00"
                          />
                        </div>
                        <div className="flex-1">
                          <StandardBtn text="Find Availabilities" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="checkbox" name="checkbox" value="1" />
                      <p className=" font-medium">Repeat Appointment</p>
                    </div>
                    <div className="flex items-center  gap-5  ">
                      <div className="">
                        <p className="mb-2.5 font-bold text-gray-01">
                          FREQUENCY
                        </p>
                        <InputIcon placeholder="Select Room"></InputIcon>
                      </div>
                      <div className="">
                        <p className="mb-2.5 font-bold text-gray-01">EVERY</p>
                        <InputIcon placeholder="Fry"></InputIcon>
                      </div>
                      <div className="">
                        <p className="mb-2.5 font-bold text-gray-01">ON THE</p>
                        <InputIcon placeholder="Weekly"></InputIcon>
                      </div>
                    </div>
                    <div className="flex items-center  gap-5  ">
                      <div className="">
                        <p className="mb-2.5 font-bold text-gray-01">ENDS</p>
                        <InputIcon placeholder="After a number of times"></InputIcon>
                      </div>
                      <div className="">
                        <p className="mb-2.5 font-bold text-gray-01">TIMES</p>
                        <InputIcon placeholder="5"></InputIcon>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex-none">
                    <Button
                      text="Add Service"
                      type="tertiary"
                      size="large"
                      leftIcon="plus"
                    />
                  </div>
                </div>
                <div className="mt-[30px] rounded-lg border border-gray-04 bg-white p-5">
                  <div className="flex items-center gap-4">
                    <Checkbox id="checkbox" name="checkbox" value="1" />
                    <p className="font-bold text-gray-01">ADD BUFFER TIME</p>
                  </div>
                </div>
                <div className="mt-[30px] rounded-lg border border-gray-04 bg-white p-5">
                  <p className="font-bold text-gray-01">NOTE</p>
                  <div className="mt-2.5">
                    <textarea
                      name="note"
                      id="note"
                      cols={30}
                      rows={3}
                      placeholder="Write your note here"
                      className="w-full resize-none rounded-lg border border-gray-04 py-2.5 pl-[14px]"
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* right */}
              <div className=" flex basis-1/4 flex-col justify-between bg-white p-[30px]   ">
                <div className="">
                  <div className="">
                    <p className="mb-2.5 font-bold text-gray-01">EVERY</p>
                    <InputIcon placeholder="Search"></InputIcon>
                    <div className="mt-[30px]">
                      <Button
                        leftIcon="plus"
                        size="large"
                        text="New Customer"
                        type="tertiary"
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <p className="mb-2.5 font-bold text-gray-01">
                      DATE AND TIME
                    </p>
                    <p className="font-bold">22.08.2023, 11:00</p>
                  </div>
                  <div className="mt-[40px]">
                    <p className="mb-2.5 font-bold text-gray-01">
                      DATE AND TIME
                    </p>
                    <p className="font-bold">22.08.2023, 11:00</p>
                  </div>
                  <div className="">
                    <StandardBtn text="Save Appointment" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayerScreen>
      )}
    </div>
  );
}

export default Calendar;
