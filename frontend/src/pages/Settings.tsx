import { useState } from "react";
import Header from "../components/navigation/Header";
import SettingsHeader from "../components/navigation/SettingsHeader";
import SettingsSidebar from "../components/navigation/SettingsSidebar";
import SettingsTab from "../components/navigation/SettingsTab";

function Settings() {
  const [tabs, setTabs] = useState<
    | "general"
    | "user"
    | "activity"
    | "company"
    | "employees"
    | "resources"
    | "services"
    | "hours"
    | "customer"
  >("general");
  return (
    <div>
      <Header heading="Settings" />

      <div className="relative max-h-96">
        <SettingsSidebar>
          <SettingsHeader title="General">
            <SettingsTab
              tab="general"
              text="General Settings"
              selection={tabs === "general" ? true : false}
              handleClick={() => {
                setTabs("general");
              }}
            />
            <SettingsTab
              tab="user"
              text="User Accounts"
              selection={tabs === "user" ? true : false}
              handleClick={() => {
                setTabs("user");
              }}
            />
            <SettingsTab
              tab="activity"
              text="Activity Logs"
              handleClick={() => {
                setTabs("activity");
              }}
              selection={tabs === "activity" ? true : false}
            />
          </SettingsHeader>
          <SettingsHeader title="Company">
            <SettingsTab
              tab="company"
              text="Company Information"
              handleClick={() => {
                setTabs("company");
              }}
              selection={tabs === "company" ? true : false}
            />
            <SettingsTab
              tab="employees"
              text="Employees"
              handleClick={() => {
                setTabs("employees");
              }}
              selection={tabs === "employees" ? true : false}
            />

            <SettingsTab
              tab="resources"
              text="Resources"
              handleClick={() => {
                setTabs("resources");
              }}
              selection={tabs === "resources" ? true : false}
            />
            <SettingsTab
              tab="services"
              text="Services"
              handleClick={() => {
                setTabs("services");
              }}
              selection={tabs === "services" ? true : false}
            />
          </SettingsHeader>
          <SettingsHeader title="Calendar">
            <SettingsTab
              tab="hours"
              text="Working Hours"
              handleClick={() => {
                setTabs("hours");
              }}
              selection={tabs === "hours" ? true : false}
            />
          </SettingsHeader>
          <SettingsHeader title="Customers">
            <SettingsTab
              tab="customer"
              text="Customer Groups"
              handleClick={() => {
                setTabs("customer");
              }}
              selection={tabs === "customer" ? true : false}
            />
          </SettingsHeader>
        </SettingsSidebar>
        <section className="p-6"></section>
      </div>
    </div>
  );
}
export default Settings;
