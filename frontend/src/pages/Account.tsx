import { useState } from "react";
import Header from "../components/navigation/Header";
import SettingsTab from "../components/navigation/SettingsTab";
import authFunctions from "../hooks/authFunctions";
import { useNavigate } from "react-router-dom";

function Account() {
  const nav = useNavigate();

  const [tabs, setTabs] = useState<"settings" | "invite" | "logout">(
    "settings",
  );
  return (
    <div>
      <Header heading="My Account" />
      <div className="flex p-6">
        <div className="p-2.5">
          <SettingsTab
            tab="settings"
            selection={tabs === "settings" ? true : false}
            text="Account Settings"
            handleClick={() => {
              setTabs("settings");
            }}
          />
          <SettingsTab
            tab="invite"
            selection={tabs === "invite" ? true : false}
            text="Account Settings"
            handleClick={() => {
              setTabs("invite");
            }}
          />
          <SettingsTab
            tab="logout"
            selection={false}
            text="Logout"
            handleClick={() => {
              authFunctions.logout();
              location.assign("/login");
              //   nav("/login");
            }}
          />
        </div>

        <div className="flex-1"></div>
      </div>
    </div>
  );
}
export default Account;
