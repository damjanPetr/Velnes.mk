type Props = {
  icon?: string;
  size?: "small" | "large";
  data: {
    name: string;
    date: string;
    price: string;
    service: string;
  };
};

function Appointment({ icon, size, data }: Props) {
  return (
    <div
      className={
        "border border-gray-04 p-5 pl-[30px] hover:bg-lavender " + size ===
        "large"
          ? ""
          : ""
      }
    >
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">{data.name}</p>
        <p className="text-lg font-medium">{data.price} EUR</p>
      </div>

      <div className="">
        <p className="text-base font-medium">{data.date} EUR</p>
      </div>
    </div>
  );
}
export default Appointment;
