type Props = { pages: number[] };
function Pagination({ pages }: Props) {
  return (
    <div className="flex items-center">
      <div className="fcen">
        <img src="icons/arrow/chevron-left.svg" alt="" />
      </div>
      <div className="flex items-center gap-2.5">
        {pages.length > 4
          ? pages.map((item) => {
              return <div className="p-2.5 font-medium">{item}</div>;
            })
          : pages.map((item) => {
              return <div className="p-2.5 font-medium">{item}</div>;
            })}
      </div>
      <div className="fcen">
        <img src="icons/arrow/chevron-right.svg" alt="" />
      </div>
    </div>
  );
}
export default Pagination;
