function SettingsSidebar({ children }: { children?: React.ReactNode }) {
  return (
    <div className="sticky  max-h-[calc(100vh-80px)]  max-w-[270px] space-y-5 overflow-scroll p-2.5">
      {children}
    </div>
  );
}
export default SettingsSidebar;
