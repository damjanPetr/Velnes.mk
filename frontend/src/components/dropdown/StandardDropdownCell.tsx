type Props = {
  text: string;
  handleClick?: () => void;
};

function StandardDropdownCell({ handleClick, text }: Props) {
  return (
    <div
      className="border-b border-gray-04 px-[16px] py-[10px] hover:bg-gray-07"
      onClick={handleClick}
    >
      {text}
    </div>
  );
}
export default StandardDropdownCell;
