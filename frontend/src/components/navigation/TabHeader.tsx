type Props = {
  children?: React.ReactNode;
};

function TabHeader({ children }: Props) {
  return (
    <div className={`flex items-center gap-5 bg-gray-04 pl-[26px] `}>
      <div className=" mt-[23px] flex gap-5 ">{children}</div>
    </div>
  );
}
export default TabHeader;
