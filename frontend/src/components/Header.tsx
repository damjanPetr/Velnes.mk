function Header() {
  return (
    <header className="bg-gray-04 flex w-full justify-end">
      <nav className="pb-4 pt-[14px]">
        <ul className="mr-[30px] flex items-center gap-[25px]">
          <li>
            <a href="">
              <img src="/icons/common/search.svg" alt="" className="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="/icons/common/notification.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="" className="fcen">
              <div className="h-10 w-10 rounded-full ">img</div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
