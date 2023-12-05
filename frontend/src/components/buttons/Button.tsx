type Props = {
  type: "primary" | "secondary" | "tertiary";
  text: string;
  size: "small" | "large";
  leftIcon?: string;
  rightIcon?: boolean;
  optinal?: string;
  handleClick: (e: React.MouseEvent) => void;
};
function Button({
  type = "primary",
  leftIcon,
  rightIcon,
  text,
  size,
  optinal,
  handleClick,
}: Props) {
  const map = {
    primary:
      "bg-denum text-white hover:bg-marian-blue active:bg-oxford-blue disabled:bg-gray-05 text-white  py-[12px]",
    secondary:
      "border bg-gray-03 border-gray-03 text-black hover:bg-gray-02 active:bg-gray-05 disabled:bg-gray-04 disabled:text-gray-04 text-white  py-[12px]",
    tertiary:
      "text-denum hover:text-marian-blue active:text-oxford-blue disabled:text-gray-02",
  };

  return (
    <div
      onClick={handleClick}
      className={
        `flex ${optinal} items-center justify-center gap-1 rounded-lg ${
          leftIcon ? "pl-[12px]" : "pl-[16px]"
        } ${rightIcon ? "pr-[12px]" : "pr-[16px]"}` +
        " " +
        map[type]
      }
    >
      {leftIcon && (
        <div>
          <img src="icons/arrow/chevron-left.svg" alt="" />
        </div>
      )}
      <button
        className={`font-bold ${
          size === "large" ? "text-[16px]" : "text-[14px]"
        }`}
      >
        {text}
      </button>
      {rightIcon && (
        <div>
          <img src="icons/arrow/chevron-right.svg" alt="" />
        </div>
      )}
    </div>
  );
}
export default Button;
