type Props = {
  type: string;
  size: "small" | "large";
  icon?: "eye" | "down-arrow";
  id: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
};
function Input({
  type = "text",
  size,
  icon,
  id,
  handleChange,
  handleFocus,
}: Props) {
  return (
    <div
      onFocus={handleFocus}
      className="flex items-center rounded-lg p-2.5 pl-[14px] outline outline-1 outline-gray-03   focus-within:outline-2 focus-within:outline-denum  "
    >
      <input
        onChange={handleChange}
        type={type}
        placeholder=""
        id={id}
        className={`flex-grow  font-medium outline-none  placeholder:text-gray-03  ${
          size == "small" ? "text-[14px]" : " text-[16px]"
        }`}
      />
      <div className="pr-2 fcen">
        {icon === "down-arrow" && (
          <img src="icons/arrow/chevron-down.svg" alt="" />
        )}
        {icon === "eye" && (
          <button type="button" className="">
            <img src="icons/common/show.svg" alt="" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Input;
