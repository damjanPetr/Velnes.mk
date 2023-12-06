import Button from "../components/buttons/Button";
import InputIcon from "../components/inputs/InputIcon";
import Header from "../components/navigation/Header";
import PageSection from "../components/navigation/PageSection";
import TabHeader from "../components/navigation/TabHeader";

import { useState } from "react";
import Status from "../components/cards/Status";
import Note from "../components/note/Note";

function UserOverview() {
  const [tabs, setTabs] = useState("Overview" || "Appointments" || "Feedback");

  console.log(tabs);
  return (
    <div>
      <Header heading="Katerina Dimitrova">
        <div className="flex items-center gap-2.5">
          <div className="fcen">
            <svg
              width="24"
              height="24"
              className="fill-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.045 7.40088C19.423 7.02288 19.631 6.52088 19.631 5.98688C19.631 5.45288 19.423 4.95088 19.045 4.57288L17.459 2.98688C17.081 2.60888 16.579 2.40088 16.045 2.40088C15.511 2.40088 15.009 2.60888 14.632 2.98588L4 13.5849V17.9999H8.413L19.045 7.40088ZM16.045 4.40088L17.632 5.98588L16.042 7.56988L14.456 5.98488L16.045 4.40088ZM6 15.9999V14.4149L13.04 7.39688L14.626 8.98288L7.587 15.9999H6ZM4 19.9999H20V21.9999H4V19.9999Z" />
            </svg>
          </div>
          <Status color="green">Active</Status>
          <Status color="red">Active</Status>
          <Status color="orange">Active</Status>
        </div>
      </Header>
      <TabHeader>
        <button
          onClick={() => {
            setTabs("Overview");
          }}
          className={`border-b-[3px] p-2.5 pb-5 text-lg ${
            tabs === "Overview"
              ? "border-denum  font-bold"
              : "border-gray-04 font-medium"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => {
            setTabs("Appointments");
          }}
          className={`border-b-[3px] p-2.5 pb-5 text-lg ${
            tabs === "Appointments"
              ? "border-denum  font-bold"
              : "border-gray-04 font-medium"
          }`}
        >
          Appointments
        </button>
        <button
          onClick={() => {
            setTabs("Feedback");
          }}
          className={`border-b-[3px] p-2.5 pb-5 text-lg ${
            tabs === "Feedback"
              ? "border-denum  font-bold"
              : "border-gray-04 font-medium"
          }`}
        >
          Feedback
        </button>
      </TabHeader>
      <div className="p-6">
        {tabs === "Overview" && (
          <div className="flex items-center gap-5">
            <div className="basis-1/3 space-y-5">
              <div className="rounded-lg border border-gray-04">
                <div className="flex items-center gap-2 border-b border-gray-04 p-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z"
                      fill="#7A7E87"
                    />
                    <path
                      d="M5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22ZM19 8L19.001 20H5V8H19Z"
                      fill="#7A7E87"
                    />
                  </svg>
                  <p className="font-medium">New Appointment</p>
                </div>
                <div className="flex items-center gap-2 border-b border-gray-04 p-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.4 17.4C17.8774 17.4 18.3352 17.5896 18.6728 17.9272C19.0104 18.2648 19.2 18.7226 19.2 19.2C19.2 19.6774 19.0104 20.1352 18.6728 20.4728C18.3352 20.8104 17.8774 21 17.4 21C16.9226 21 16.4648 20.8104 16.1272 20.4728C15.7896 20.1352 15.6 19.6774 15.6 19.2C15.6 18.201 16.401 17.4 17.4 17.4ZM3 3H5.943L6.789 4.8H20.1C20.3387 4.8 20.5676 4.89482 20.7364 5.0636C20.9052 5.23239 21 5.46131 21 5.7C21 5.853 20.955 6.006 20.892 6.15L17.67 11.973C17.364 12.522 16.77 12.9 16.095 12.9H9.39L8.58 14.367L8.553 14.475C8.553 14.5347 8.5767 14.5919 8.6189 14.6341C8.6611 14.6763 8.71833 14.7 8.778 14.7H19.2V16.5H8.4C7.92261 16.5 7.46477 16.3104 7.12721 15.9728C6.78964 15.6352 6.6 15.1774 6.6 14.7C6.6 14.385 6.681 14.088 6.816 13.836L8.04 11.631L4.8 4.8H3V3ZM8.4 17.4C8.87739 17.4 9.33523 17.5896 9.67279 17.9272C10.0104 18.2648 10.2 18.7226 10.2 19.2C10.2 19.6774 10.0104 20.1352 9.67279 20.4728C9.33523 20.8104 8.87739 21 8.4 21C7.92261 21 7.46477 20.8104 7.12721 20.4728C6.78964 20.1352 6.6 19.6774 6.6 19.2C6.6 18.201 7.401 17.4 8.4 17.4ZM16.5 11.1L19.002 6.6H7.626L9.75 11.1H16.5Z"
                      fill="#7A7E87"
                    />
                  </svg>

                  <p className="font-medium">New Invoice</p>
                </div>
                <div className="flex items-center gap-2 border-b border-gray-04 p-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 4H15.82C15.6137 3.41645 15.2319 2.911 14.7271 2.55294C14.2222 2.19488 13.6189 2.00174 13 2H11C10.3811 2.00174 9.7778 2.19488 9.27293 2.55294C8.76807 2.911 8.38631 3.41645 8.18 4H7C6.20435 4 5.44129 4.31607 4.87868 4.87868C4.31607 5.44129 4 6.20435 4 7V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V7C20 6.20435 19.6839 5.44129 19.1213 4.87868C18.5587 4.31607 17.7956 4 17 4ZM10 5C10 4.73478 10.1054 4.48043 10.2929 4.29289C10.4804 4.10536 10.7348 4 11 4H13C13.2652 4 13.5196 4.10536 13.7071 4.29289C13.8946 4.48043 14 4.73478 14 5V6H10V5ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V7C6 6.73478 6.10536 6.48043 6.29289 6.29289C6.48043 6.10536 6.73478 6 7 6H8V7C8 7.26522 8.10536 7.51957 8.29289 7.70711C8.48043 7.89464 8.73478 8 9 8H15C15.2652 8 15.5196 7.89464 15.7071 7.70711C15.8946 7.51957 16 7.26522 16 7V6H17C17.2652 6 17.5196 6.10536 17.7071 6.29289C17.8946 6.48043 18 6.73478 18 7V19Z"
                      fill="#7A7E87"
                    />
                  </svg>

                  <p className="font-medium">Fill in a form</p>
                </div>
                <div className="flex items-center gap-2 border-b border-gray-04 p-4">
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

                  <p className="font-medium">Delete</p>
                </div>
              </div>
              <div className="rounded-lg border border-gray-04">
                <PageSection header="Details" size="large"></PageSection>
              </div>
              <div className="rounded-lg border border-gray-04">
                <PageSection
                  header="Notification Settings"
                  size="large"
                ></PageSection>
              </div>
            </div>
            <div className="flex basis-2/3 flex-col">
              <div className="flex justify-between px-4 py-5">
                <div className="text-center font-bold">
                  <p className="text-2xl">12</p>
                  <p className="mt-5 text-gray-01">APPOINTMENTS</p>
                </div>
                <div className="text-center font-bold">
                  <p className="text-2xl">12</p>
                  <p className="mt-5 text-gray-01">INVOICES</p>
                </div>
                <div className="text-center font-bold">
                  <p className="text-2xl">12</p>
                  <p className="mt-5 text-gray-01">LOYALTY POINTS</p>
                </div>
                <div className="text-center font-bold">
                  <p className="text-2xl">12</p>
                  <p className="mt-5 text-gray-01">CANCELATIONS</p>
                </div>
                <div className="text-center font-bold">
                  <p className="text-2xl">12</p>
                  <p className="mt-5 text-gray-01">NO SHOWS</p>
                </div>
                <div className="text-center font-bold">
                  <p className="text-2xl">12</p>
                  <p className="mt-5 text-gray-01">TOTAl SPEND</p>
                </div>
              </div>

              <div className="mt-5 flex gap-5">
                <div className="basis-1/2">
                  <div className="message  bg-papaya-whip p-5">
                    <div className="flex items-center gap-1 font-bold text-ochre">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.001 10H13.001V15H11.001V10ZM11 16H13V18H11V16Z"
                          fill="#7A7E87"
                        />
                        <path
                          d="M13.7679 4.20018C13.4199 3.54518 12.7419 3.13818 11.9999 3.13818C11.2579 3.13818 10.5799 3.54518 10.2319 4.20118L2.89395 18.0642C2.73112 18.3686 2.65046 18.7102 2.65993 19.0553C2.6694 19.4005 2.76867 19.7371 2.94795 20.0322C3.12465 20.3286 3.37559 20.5737 3.676 20.7435C3.97641 20.9133 4.3159 21.0017 4.66095 21.0002H19.3389C20.0469 21.0002 20.6879 20.6382 21.0529 20.0322C21.2319 19.737 21.331 19.4004 21.3405 19.0553C21.35 18.7103 21.2695 18.3687 21.1069 18.0642L13.7679 4.20018ZM4.66095 19.0002L11.9999 5.13718L19.3439 19.0002H4.66095Z"
                          fill="#7A7E87"
                        />
                      </svg>

                      <p>Your trial ends in 10 days</p>
                    </div>
                  </div>
                  <div className="mt-5 rounded-lg border border-gray-04">
                    <PageSection header="History" size="large"></PageSection>
                    <div className="p-5"></div>
                  </div>
                </div>
                <div className="basis-1/2">
                  <div className="mt-5 rounded-lg border border-gray-04">
                    <PageSection header="Notes" size="large">
                      <Button
                        text="Create Note"
                        type="tertiary"
                        size="small"
                        leftIcon=""
                      />
                    </PageSection>
                    <div className="relative p-5">
                      <Note
                        data={{
                          name: "John Doe",
                          content:
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, natus?",
                          date: "2 days ago",
                        }}
                      />
                      <div className="absolute right-5 top-10 w-[200px] rounded-lg bg-white shadow-md">
                        <div className="flex gap-0.5 border-b border-gray-04 px-4 py-2.5">
                          <div className="fcen">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.045 7.40088C19.423 7.02288 19.631 6.52088 19.631 5.98688C19.631 5.45288 19.423 4.95088 19.045 4.57288L17.459 2.98688C17.081 2.60888 16.579 2.40088 16.045 2.40088C15.511 2.40088 15.009 2.60888 14.632 2.98588L4 13.5849V17.9999H8.413L19.045 7.40088ZM16.045 4.40088L17.632 5.98588L16.042 7.56988L14.456 5.98488L16.045 4.40088ZM6 15.9999V14.4149L13.04 7.39688L14.626 8.98288L7.587 15.9999H6ZM4 19.9999H20V21.9999H4V19.9999Z"
                                fill="#7A7E87"
                              />
                            </svg>
                          </div>
                          <p>Mark as complete</p>
                        </div>
                        <div className="flex gap-0.5 px-4 py-2.5">
                          <div className="fcen">
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

                          <p>Delete</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {tabs === "Appointments" && (
          <div className="">
            <div className="flex items-center">
              <div className="flex items-center gap-5">
                <InputIcon placeholder="State"></InputIcon>
                <InputIcon placeholder="All Employees"></InputIcon>
              </div>

              <div className="flex flex-1 items-center justify-end gap-5">
                <Button
                  size="large"
                  type="primary"
                  text="New Appointment"
                ></Button>
              </div>
            </div>
            <div className="mt-5">
              <table className="w-full table-auto text-left">
                <thead className="">
                  <tr className="font-bold text-gray-01 dirChildren:p-5">
                    <th>DATE AND ITEM</th>
                    <th>SERVICES</th>
                    <th>EMPLOYEES</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody className="odd:bg-gray-07">
                  <tr className="odd:bg-gray-07">
                    <td className="p-5 font-medium">monkey</td>
                    <td className="p-5 font-medium">monkey</td>
                    <td className="p-5 font-medium">monkey</td>
                    <td className="p-5 font-medium">monkey</td>
                    <td className="p-5 font-medium">monkey</td>
                    <td className="relative p-5 font-medium">
                      {/* Appointment popup */}
                      <div className="absolute right-5 top-10 w-[200px] rounded-lg bg-white shadow-md">
                        <div className="flex gap-0.5 border-b border-gray-04 px-4 py-2.5">
                          <div className="fcen">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.045 7.40088C19.423 7.02288 19.631 6.52088 19.631 5.98688C19.631 5.45288 19.423 4.95088 19.045 4.57288L17.459 2.98688C17.081 2.60888 16.579 2.40088 16.045 2.40088C15.511 2.40088 15.009 2.60888 14.632 2.98588L4 13.5849V17.9999H8.413L19.045 7.40088ZM16.045 4.40088L17.632 5.98588L16.042 7.56988L14.456 5.98488L16.045 4.40088ZM6 15.9999V14.4149L13.04 7.39688L14.626 8.98288L7.587 15.9999H6ZM4 19.9999H20V21.9999H4V19.9999Z"
                                fill="#7A7E87"
                              />
                            </svg>
                          </div>
                          <p>Details</p>
                        </div>
                        <div className="flex gap-0.5 px-4 py-2.5">
                          <div className="fcen">
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

                          <p>Delete</p>
                        </div>
                      </div>

                      <svg
                        onClick={() => {}}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className=" text-gray-01 hover:bg-black"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10Z" />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {tabs === "Feedback" && (
          <div className="flex items-center">
            <div className="basis-1/2 self-start">
              <div className="flex flex-1 items-center justify-between  pr-5">
                <InputIcon placeholder="Reaction"></InputIcon>
                <InputIcon placeholder="Status"></InputIcon>
              </div>
              <div className="">
                <div className="p-5">
                  <div className="flex items-center gap-2.5 ">
                    {/* icon */}
                    <div className="rounded-full bg-pine-green p-5"></div>
                    <div className="flex-1 text-left">
                      <p className="font-bold">Katerina Antonova</p>
                      <p className="mt-2.5 font-medium">18.03.2023, 9:30</p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2.5 ">
                    {/* icon */}
                    <div className="rounded-full bg-pine-green p-5"></div>
                    <div className="flex-1 text-left">
                      <p className="font-bold">Katerina Antonova</p>
                      <p className="mt-2.5 font-medium">18.03.2023, 9:30</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2.5 ">
                    {/* icon */}
                    <div className="rounded-full bg-pine-green p-5"></div>
                    <div className="flex-1 text-left">
                      <p className="font-bold">Katerina Antonova</p>
                      <p className="mt-2.5 font-medium">18.03.2023, 9:30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 ">
              <div className="flex items-center">
                <div className="flex flex-1 items-center justify-between gap-5">
                  <div className="rounded-lg border border-gray-04 p-4 fcen">
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
                  <Button
                    size="large"
                    type="primary"
                    text="Publish a response"
                  ></Button>
                </div>
              </div>
              <div className="mt-5 p-5">
                <div className="flex items-center gap-5">
                  <div className="rounded-full border border-gray-04 bg-pine-green p-4"></div>
                  <p className="font-bold">Katerina Stojankova</p>
                  <p className="font-medium">18.08.2022</p>
                </div>
                <div className="mt-[30px]">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora facilis blanditiis dolores laboriosam quas ullam
                    nobis dolore numquam, molestiae autem ratione ipsum placeat
                    expedita assumenda, nostrum magni architecto? Reiciendis ea
                    atque ipsum quaerat vel, accusantium voluptate veritatis
                    voluptatibus possimus modi perspiciatis molestias quia cum
                    tempora. Velit placeat architecto delectus exercitationem.
                  </p>
                </div>
              </div>
              <div className="mt-5 rounded-lg border border-gray-04">
                <PageSection
                  header="Appointment Details"
                  size="large"
                ></PageSection>
                <div className="relative p-5">
                  <div className="flex">
                    <div className="p-5">
                      <p className="font-bold text-gray-01">Employee</p>
                    </div>
                    <div className="p-5">
                      <p className="font-bold text-gray-01">DATE AND TIME</p>
                    </div>
                    <div className="p-5">
                      <p className="font-bold text-gray-01">SERVICES</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="p-5">
                      <p className=" font-medium">Maria</p>
                    </div>
                    <div className="p-5">
                      <p className=" font-medium">19.29.2023 10:00</p>
                    </div>
                    <div className="p-5">
                      <p className=" font-medium">Hair</p>
                    </div>
                  </div>
                  <div className="flex justify-end p-4">
                    <div className="rounded-lg border border-gray-04 px-4 py-3 font-bold fcen">
                      View Appointment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default UserOverview;
