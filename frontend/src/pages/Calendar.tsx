import { useState } from "react";
import LayerScreen from "../components/LayerScreen";
import Button from "../components/buttons/Button";
import Checkbox from "../components/buttons/Checkbox";
import StandardBtn from "../components/buttons/StandardBtn";
import Input from "../components/inputs/Input";
import InputIcon from "../components/inputs/InputIcon";
import Header from "../components/navigation/Header";
import PopUpTop from "../components/navigation/PopUpTop";
import axios from "../helpers/axios";
import { useLoaderData } from "react-router-dom";
import {
  appontimentsProps,
  resourcesProps,
  servicesProps,
  userProps,
} from "../router";
import StandardDropdownCell from "../components/dropdown/StandardDropdownCell";

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

function Calendar() {
  const [screen, setScreen] = useState<boolean>(false);

  const { services, resources, appointments, users } = useLoaderData() as {
    services: { data: servicesProps[] };
    resources: { data: resourcesProps[] };
    appointments: { data: appontimentsProps[] };
    users: userProps[];
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
          <InputIcon placeholder="Week"></InputIcon>
          <InputIcon icon="people" placeholder="All Employees">
            <div className="absolute bottom-0 left-0 w-full">
              {users.map((item) => {
                return (
                  <StandardDropdownCell text={item.name}></StandardDropdownCell>
                );
              })}
            </div>
          </InputIcon>
          <InputIcon icon="scissors" placeholder="All Resources"></InputIcon>
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
