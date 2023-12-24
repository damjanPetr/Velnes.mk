import { useState } from "react";
type Props = {
  title: string | undefined;
  duration: string | undefined;
  children?: React.ReactNode;
  price?: string;
  handleClick?: () => void;
  employee?: { label: string; value: string | null }[];
};

function Service({
  title,
  children,
  price,
  duration,
  employee,
  handleClick,
}: Props) {
  const [inactive, setInactive] = useState<boolean>(false);
  return (
    <div
      className={
        "flex  items-center justify-between rounded-lg border-b border-gray-04 p-5 hover:bg-alice-blue" +
        (inactive ? " text-gray-02" : "")
      }
    >
      <div className="flex flex-1 justify-between">
        <p className="font-medium">{title}</p>
        <div className="flex flex-1 justify-between">
          <div className="ml-20 flex flex-1 items-center gap-10">
            <p className="font-bold">{duration + " Min"}</p>
            <p className="font-bold">&euro;{price}</p>
            <p className="font-medium">{children}</p>
            <p>{employee && employee[0].label}</p>
          </div>
          <div className="" onClick={handleClick}>
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
      </div>
    </div>
  );
}
export default Service;
