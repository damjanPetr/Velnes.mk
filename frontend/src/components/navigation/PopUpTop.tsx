type Props = {
  children?: React.ReactNode;
  text: string;
  xHandleClick?: () => void;
};
function PopUpTop({ children, text, xHandleClick }: Props) {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <p className="text-lg font-bold">{text}</p>
          <div className="">{children}</div>
        </div>
        <div className="mr-1 cursor-pointer" onClick={xHandleClick}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.192 6.34424L11.949 10.5862L7.70697 6.34424L6.29297 7.75824L10.535 12.0002L6.29297 16.2422L7.70697 17.6562L11.949 13.4142L16.192 17.6562L17.606 16.2422L13.364 12.0002L17.606 7.75824L16.192 6.34424Z"
              fill="#7A7E87"
            />
          </svg>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
export default PopUpTop;
