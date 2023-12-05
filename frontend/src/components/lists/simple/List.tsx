type Props = {
  icon?: string;
  arrow?: true;
  size?: "small" | "large";
};
function List({ icon, arrow, size }: Props) {
  return (
    <div
      className={
        "flex items-center border border-gray-04 hover:bg-alice-blue" + size ===
        "large"
          ? " p-5 pl-5 "
          : " px-4 py-2.5"
      }
    >
      <div className="flex justify-between gap-2.5">
        {icon && <div className=""></div>}
        <p
          className={
            "font-medium text-black" + size === "large" ? "text-lg" : "text-sm"
          }
        ></p>
      </div>
      {arrow && (
        <div className="">
          <img src="icons/arrow/chevron-right.svg" alt="" />
        </div>
      )}
    </div>
  );
}
export default List;
