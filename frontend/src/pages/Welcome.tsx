import { useState } from "react";
import Button from "../components/buttons/Button";
import Header from "../components/navigation/Header";
import TabPopUp from "../components/tabs/TabPopUp";
import Input from "../components/inputs/Input";
import PageSection from "../components/navigation/PageSection";
import StandardBtn from "../components/buttons/StandardBtn";
import Note from "../components/note/Note";
import InputIcon from "../components/inputs/InputIcon";

function Welcome() {
  const [tabs, setTabs] = useState<"Schedule" | "Activity">("Schedule");
  return (
    <div>
      <Header heading="" />

      <div className="flex p-6 ">
        <div className="basis-1/2">
          <section className="max-w-lg">
            <div className="">
              <h2 className="text-2xl font-bold">Welcome to Velnes!</h2>
              <p className="mt-6 font-medium">
                From now on we will make your everyday work life easier, so you
                can focus on what you do best! Start setting up your business in
                Velnes and discover all features. Prefer talking to a human?
              </p>
            </div>
            <div className="mt-[30px] flex items-start gap-5">
              <Button
                size="large"
                text="Start the product tour"
                type="secondary"
              />
              <Button size="large" text="Schedule a free demo" type="primary" />
            </div>
          </section>
          <section className="mt-6">
            <nav className="flex items-center justify-between">
              <div className="flex">
                <TabPopUp
                  selected={true}
                  size="large"
                  title="Schedule"
                  handleClick={() => {
                    setTabs("Schedule");
                  }}
                />
                <TabPopUp
                  selected={false}
                  size="large"
                  title="Activity"
                  handleClick={() => {
                    setTabs("Activity");
                  }}
                />
              </div>

              <InputIcon placeholder="All Employees" icon="people"></InputIcon>
            </nav>
          </section>
        </div>
        <div className="basis-1/2">
          <section className="">
            <div className="mt-5 rounded-lg border border-gray-04">
              <PageSection header="Quick Start" size="large"></PageSection>
              <div className="flex w-full flex-wrap content-start items-center justify-center gap-4 p-5">
                <StandardBtn text="Appointment" />
                <StandardBtn text="Get Invoice" />
                <StandardBtn text="Get New Customer" />
              </div>
            </div>
          </section>
          <section className="">
            <div className="mt-5 rounded-lg border border-gray-04">
              <PageSection header="Notes" size="large">
                <Button
                  text="Create Note"
                  type="tertiary"
                  size="small"
                  leftIcon=""
                />
              </PageSection>
              <div className="p-5">
                <Note
                  data={{
                    name: "John Doe",
                    content:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, natus?",
                    date: "2 days ago",
                  }}
                />
              </div>
            </div>
            <div className="mt-5 rounded-lg border border-gray-04">
              <PageSection
                header="Who's working today"
                size="large"
              ></PageSection>
              <div className="p-5"></div>
            </div>
            <div className="mt-5 rounded-lg border border-gray-04">
              <PageSection header="Today's guests" size="large"></PageSection>
              <div className="p-5"></div>
            </div>
            <div className="mt-5 rounded-lg border border-gray-04">
              <PageSection
                header="Calendar Utilization"
                size="large"
              ></PageSection>
              <div className="p-5"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
