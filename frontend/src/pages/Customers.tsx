import { useLoaderData } from "react-router-dom";
import Button from "../components/buttons/Button";
import Input from "../components/inputs/Input";
import InputIcon from "../components/inputs/InputIcon";
import Header from "../components/navigation/Header";
import Pagination from "../components/navigation/Pagination";
import axios from "../helpers/axios";

export type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};
export const CustomersLoader = async () => {
  const res = await axios.get("/api/customers");
  return res.data;
};

function Customers() {
  const { data } = useLoaderData() as { data: Customer[] };

  console.log("🚀 ✔ file: Customers.tsx:26 ✔ Customers ✔ data:", data);

  return (
    <div>
      <Header heading="Customers" />
      <div className="p-6">
        <div className="flex items-center">
          <Input size="large" id="input" type="search" placeholder="Search">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.46582 10.9467C6.46582 8.472 8.472 6.46582 10.9467 6.46582C13.4215 6.46582 15.4277 8.472 15.4277 10.9467C15.4277 13.4215 13.4215 15.4277 10.9467 15.4277C8.472 15.4277 6.46582 13.4215 6.46582 10.9467ZM10.9467 4.46582C7.36743 4.46582 4.46582 7.36743 4.46582 10.9467C4.46582 14.5261 7.36743 17.4277 10.9467 17.4277C12.3756 17.4277 13.6964 16.9653 14.7678 16.182L18.7102 20.1244L20.1244 18.7102L16.182 14.7678C16.9653 13.6964 17.4277 12.3756 17.4277 10.9467C17.4277 7.36743 14.5261 4.46582 10.9467 4.46582Z"
                fill="#7A7E87"
              />
            </svg>
          </Input>

          <div className="flex flex-1 items-center justify-end gap-5">
            <InputIcon placeholder="File"></InputIcon>
            <Button size="large" type="primary" text="Create customer"></Button>
          </div>
        </div>
        <div className="mt-[30px] flex items-center gap-5">
          <div className="flex-1">
            <div className="font-bold text-gray-01">CUSTOMER GROUP</div>
            <div className="mt-[10px]">
              <InputIcon placeholder="All"></InputIcon>
            </div>
          </div>
          <div className="flex-1">
            <div className="font-bold text-gray-01">TREATED BY</div>
            <div className="mt-[10px]">
              <InputIcon placeholder="All" icon="people"></InputIcon>
            </div>
          </div>
          <div className="flex-1 text-gray-01">
            <div className="font-bold ">SERVICES</div>
            <div className="mt-[10px]">
              <InputIcon placeholder="All" icon="star"></InputIcon>
            </div>
          </div>
          <div className="flex-1">
            <div className="font-bold text-gray-01">PRODUCTS</div>
            <div className="mt-[10px]">
              <InputIcon placeholder="All" icon="bottle"></InputIcon>
            </div>
          </div>
          <div className="">
            <div className="p-4"></div>
            <div className="rounded-full border border-gray-03 p-3  ">
              <svg
                width="24"
                className="fill-gray-01"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 11H17V13H7V11ZM4 7H20V9H4V7ZM10 15H14V17H10V15Z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Filters section */}
        <div className="mt-[30px] flex items-center gap-5">
          <div className="flex items-center rounded-3xl bg-mint-green p-2.5 ">
            <svg
              width="24"
              height="24"
              className="fill-pine-green"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.192 6.34424L11.949 10.5862L7.70697 6.34424L6.29297 7.75824L10.535 12.0002L6.29297 16.2422L7.70697 17.6562L11.949 13.4142L16.192 17.6562L17.606 16.2422L13.364 12.0002L17.606 7.75824L16.192 6.34424Z"
                fill="#7A7E87"
              />
            </svg>
            <div className="font-medium">Gender 198</div>
          </div>
        </div>
        <div className="mt-[16px]"></div>
        <div className="mt-[20px]">
          <table className="w-full table-auto text-left">
            <thead className="">
              <tr className="font-bold text-gray-01 dirChildren:p-5">
                <th>FULL NAME</th>
                <th>CUSTOMER GROUP</th>
                <th>PHONE MOBILE</th>
                <th>EMAIL</th>
                <th>NEWSLETTER</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="odd:bg-gray-07">
              {data
                ? data.map((customer) => {
                    return (
                      <tr className="odd:bg-gray-07">
                        <td className="p-5 font-medium">
                          {customer.firstName + " " + customer.lastName}
                        </td>
                        <td className="p-5 font-medium">Customer Group</td>
                        <td className="p-5 font-medium">{customer.phone}</td>
                        <td className="p-5 font-medium">{customer.email}</td>
                        <td className="p-5 font-medium">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="mx-auto fill-pine-green"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.99997 15.586L6.70697 12.293L5.29297 13.707L9.99997 18.414L19.707 8.70697L18.293 7.29297L9.99997 15.586Z"
                              fill="#7A7E87"
                            />
                          </svg>
                        </td>
                        <td className="relative p-5 font-medium">
                          <svg
                            onClick={() => {}}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className=" text-gray-01 hover:bg-black"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10Z" />
                          </svg>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
        <div className="fcen">
          <Pagination pages={[1, 2, 3, 4, 5]} />
        </div>
      </div>
    </div>
  );
}
export default Customers;
