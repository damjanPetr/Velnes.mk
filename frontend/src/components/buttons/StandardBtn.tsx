function StandardBtn({
  text,
  handleClick,
  children,
  selected,
  optional,
}: {
  text?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  selected?: boolean;
  optional?: string;
}) {
  return (
    <button
      className={`rounded-lg border  border-gray-03 px-[24px] py-[15px] text-center font-bold ${
        selected ? "bg-denum text-white" : ""
      }  ${optional}`}
      onClick={handleClick}
    >
      {text}
      {children}
    </button>
  );
}
export default StandardBtn;
