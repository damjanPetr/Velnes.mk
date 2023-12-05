import Header from "../components/navigation/Header";
import SettingsHeader from "../components/navigation/SettingsHeader";
import SettingsSidebar from "../components/navigation/SettingsSidebar";

function Settings() {
  return (
    <div>
      <Header heading="Settings" />

      <div className="relative max-h-96">
        <SettingsSidebar>
          <SettingsHeader title="General">
            <div className="px-[24px] py-[16px]">
              <h3 className="text-lg font-medium">General Settings</h3>
            </div>
            <div className="px-[24px] py-[16px]">
              <h3 className="text-lg font-medium">User Accounts</h3>
            </div>
            <div className="px-[24px] py-[16px]">
              <h3 className="text-lg font-medium">Activity Logs</h3>
            </div>
          </SettingsHeader>
          <SettingsHeader title="Company">
            <div className="px-[24px] py-[16px]">
              <h3 className="text-lg font-medium">Company Information</h3>
            </div>
            <div className="px-[24px] py-[16px]">
              <h3 className="text-lg font-medium">Employees</h3>
            </div>
            <div className="px-[24px] py-[16px]">
              <h3 className="text-lg font-medium">Resources</h3>
            </div>
            <div className="px-[24px] py-[16px]">
              <h3 className="text-lg font-medium">Services</h3>
            </div>
          </SettingsHeader>
          <SettingsHeader title="Calendar">
            <div className="px-[24px] py-[16px]">
              <h3 className="text-lg font-medium">Working Hours</h3>
            </div>
          </SettingsHeader>
          <SettingsHeader title="Customers">
            <div className="px-[24px] py-[16px]">
              <h3 className="text-lg font-medium">Customer Groups</h3>
            </div>
          </SettingsHeader>
        </SettingsSidebar>
        <section className="p-6"></section>
      </div>
    </div>
  );
}
export default Settings;
