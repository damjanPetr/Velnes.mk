export type PaginationProps = {
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
    links: {
      active: boolean;
      label: string;
      url: string | null;
    }[];
  };
  links: { next: string; prev: string; first: string; last: string };
};

function Pagination({ meta, links: link }: PaginationProps) {
  return (
    <div className="flex items-center">
      <div className="fcen">
        <img src="icons/arrow/chevron-left.svg" alt="" />
      </div>
      <div className="flex items-center gap-2.5">
        {meta.links.map((item) => {
          return <div className="p-2.5 font-medium">{item.label}</div>;
        })}
      </div>
      <div className="fcen">
        <img src="icons/arrow/chevron-right.svg" alt="" />
      </div>
    </div>
  );
}
export default Pagination;
