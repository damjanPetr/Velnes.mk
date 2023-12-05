import MainHeader from "./MainHeader";

type Props = {
  heading: string;
};
function Header({ heading }: Props) {
  return (
    <header className="flex w-full  items-center bg-gray-04 px-[26px]">
      <h1 className="text-2xl font-bold">{heading}</h1>
      <div className="flex flex-1 justify-end">
        <MainHeader />
      </div>
    </header>
  );
}
export default Header;
