type Props = {
  children: React.ReactNode;
};

function Activity({ children }: Props) {
  return (
    <div className="">
      <div className="flex items-center ">{children}</div>
    </div>
  );
}
export default Activity;
