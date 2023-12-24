import { Customer } from "../../../pages/Customers";

type Props = {
  icon?: string;

  customer: Customer;

  handleClick?: () => void;
};

function AppointmentDetail({ icon, customer, handleClick }: Props) {
  return (
    <div className="p-4 pl-5" onClick={handleClick}>
      <div className="flex">
        {/* Icon */}
        <div className="fcen">
          {/* <img className="rounded-full" src={icon} alt="Avatar image)" /> */}
          <div className={`relative flex-none rounded-full bg-lavender p-4 `}>
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-medium">
              {customer.firstName[0]}
            </p>
          </div>
        </div>
        <div className="ml-4 text-sm">
          <p className="text-base font-bold">
            {customer.firstName} {customer.lastName}
          </p>
          <p>{customer.phone}</p>
          <p>{customer.email}</p>
        </div>
      </div>
    </div>
  );
}
export default AppointmentDetail;
