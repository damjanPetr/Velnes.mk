function StandardBtn({
  text,
  handleClick,
}: {
  text: string;
  handleClick?: () => void;
}) {
  return (
    <button
      className="rounded-lg border  border-gray-03 px-[24px] py-[15px] text-center font-bold"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
export default StandardBtn;
