type Props = {
  bgColor: string;
  textColor: string;
  leftIcon?: string;
  rightIcon?: boolean;
};
function Button({
  bgColor = "black",
  textColor = "white",
  leftIcon,
  rightIcon,
}: Props) {
  return (
    <div className={"p-4 fcen" + bgColor}>
      {leftIcon && <>{leftIcon}</>}
      <div className={`${textColor}`}></div>
      {rightIcon && (
        <div>
          <img src="icons/arrow/chevron-right.svg" alt="" />
        </div>
      )}
    </div>
  );
}
export default Button;
