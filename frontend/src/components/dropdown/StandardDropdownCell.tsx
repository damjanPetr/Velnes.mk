type Props = {
  text: string;
};

function StandardDropdownCell({ text }: Props) {
  return <div className="px-[16px] py-[10px]">{text}</div>;
}
export default StandardDropdownCell;
