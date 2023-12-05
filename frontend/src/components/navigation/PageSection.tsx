import { Outlet } from "react-router-dom";

function PageSection() {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Header */}
      <h4 className="font-bold">Header</h4>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
export default PageSection;
