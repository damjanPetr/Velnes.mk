type Props = {
  children: React.ReactNode;
};

function PopUpBottom({ children }: Props) {
  return (
    <div className="p-[30px]">
      <div className="flex items-center justify-between gap-5">
        <div className="flex-1"></div>
        {children}
      </div>
    </div>
  );
}
export default PopUpBottom;
