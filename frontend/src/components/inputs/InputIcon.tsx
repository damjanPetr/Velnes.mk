import { useState } from "react";

function InputIcon({
  children,
  placeholder,
  icon,
  optionalCss,
}: {
  children?: React.ReactNode;
  placeholder: string;
  icon?: "scissors" | "people" | "star" | "bottle";
  optionalCss?: string;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className={
        "relative flex items-center rounded-lg border border-gray-03 p-[10px] pl-[14px] " +
        " " +
        optionalCss
      }
      onClick={() => setOpen(!open)}
    >
      <div className="p-1 fcen">
        {icon === "scissors" && (
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
        )}
        {icon === "bottle" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_279_18152"
              // style="mask-type:luminance"
              maskUnits="userSpaceOnUse"
              x="8"
              y="3"
              width="9"
              height="17"
            >
              <path
                d="M11.3205 6.25H13.4299L15.75 10.4425V19H9V10.4425L11.3205 6.25Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.875 4H13.875V6.25H10.875V4Z"
                fill="white"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 12.25C13.5 11.6287 12.9963 11.125 12.375 11.125C11.7537 11.125 11.25 11.6287 11.25 12.25V14.5C11.25 15.1213 11.7537 15.625 12.375 15.625C12.9963 15.625 13.5 15.1213 13.5 14.5V12.25Z"
                fill="white"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </mask>
            <g mask="url(#mask0_279_18152)">
              <path d="M3.375 2.5H21.375V20.5H3.375V2.5Z" fill="#7A7E87" />
            </g>
          </svg>
        )}
        {icon === "star" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12C9.87511 12 12 9.949 12 5C12 9.949 14.1101 12 19 12C14.1101 12 12 14.1101 12 19C12 14.1101 9.87511 12 5 12Z"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {icon === "people" && (
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
        )}
      </div>
      <p className="flex-1 font-medium text-gray-01">{placeholder}</p>
      <div className="p-1 fcen">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.293 9.29297L12 13.586L7.70697 9.29297L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.29297Z"
            fill="#1B1B1B"
          />
        </svg>
      </div>
      {open && children}
    </div>
  );
}
export default InputIcon;
