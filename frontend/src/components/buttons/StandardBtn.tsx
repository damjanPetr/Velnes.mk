function StandardBtn({
  text,
  handleClick,
  children,
}: {
  text?: string;
  handleClick?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <button
      className="rounded-lg border  border-gray-03 px-[24px] py-[15px] text-center font-bold"
      onClick={handleClick}
    >
      {text}
      {children}
    </button>
  );
}
export default StandardBtn;
