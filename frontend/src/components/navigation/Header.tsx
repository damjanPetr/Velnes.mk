import MainHeader from "./MainHeader";

type Props = {
  heading: string;
  children?: React.ReactNode;
};
function Header({ heading, children }: Props) {
  return (
    <header className="flex w-full  items-center bg-gray-04 px-[26px]">
      <div className="flex items-center gap-[8px]">
        <h1 className="text-2xl font-bold">{heading}</h1>
        {children}
      </div>
      <div className="flex flex-1 justify-end">
        <MainHeader />
      </div>
    </header>
  );
}
export default Header;
