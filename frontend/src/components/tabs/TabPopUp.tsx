function TabPopUp({
  title,
  handleClick,
  size,
  selected,
}: {
  title: string;
  handleClick: () => void;
  size: "large" | "small";
  selected: boolean;
}) {
  return (
    <div
      className={`text-center ${
        size === "small" ? "p-[20px] text-sm" : "px-[30px] py-[24px] text-lg"
      } ${
        selected
          ? "rounded-t-lg border border-b-0 border-gray-04 bg-gray-07 text-lg font-bold"
          : "font-medium"
      }`}
      onClick={handleClick}
    >
      {title}
    </div>
  );
}
export default TabPopUp;
