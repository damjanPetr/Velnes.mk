type Props = {
  children: React.ReactNode;
};
function DropDownFrame({ children }: Props) {
  return (
    <div className="border-b border-gray-04 px-4 py-2.5">
      <div className="flex items-center gap-2.5 font-medium"></div>
    </div>
  );
}
export default DropDownFrame;
