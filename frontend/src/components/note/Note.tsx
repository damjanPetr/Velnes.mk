import { useState } from "react";

type Props = {
  data: {
    name: string;
    content: string;
    date: string;
  };
};
function Note({ data }: Props) {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <div className="p-5 fcen">
      <div className="flex ">
        <div className="flex flex-1 gap-3">
          {/* Profile Icon */}
          <div className="">
            <img className="rounded-full" src="" alt="" />
          </div>
          {/* Content */}
          <div className="">
            <p>{data.name}</p>
            <p>{data.content}</p>
            <p>{data.date}</p>
          </div>
        </div>
        <div className="">
          {status && (
            <div className="">
              <img src="icons/common/check.svg" alt="" />
            </div>
          )}
          <img src="icons/action/dots.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Note;
