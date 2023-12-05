type Props = {
  icon?: string;
  data: {
    name: string;
    date: string;
    price: string;
    service: string;
  };
};

function AppointmentDetail({ icon, data }: Props) {
  return (
    <div className="p-5 pl-6">
      <div className="flex">
        {/* Icon */}
        <div className="fcen">
          <img className="rounded-full" src={icon} alt="Avatar image)" />
        </div>
        <div className="">
          <p>{data.name}</p>
          <p>{data.service}</p>
          <p>{data.date}</p>
        </div>
      </div>
    </div>
  );
}
export default AppointmentDetail;
