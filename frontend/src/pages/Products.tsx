import Button from "../components/buttons/Button";
import Checkbox from "../components/buttons/Checkbox";
import Input from "../components/inputs/Input";
import InputIcon from "../components/inputs/InputIcon";
import Header from "../components/navigation/Header";
import Pagination from "../components/navigation/Pagination";
import TabHeader from "../components/navigation/TabHeader";

import { useState } from "react";
function Products() {
  const [tabs, setTabs] = useState("Products" || "Categories");
  console.log(tabs);
  return (
    <div>
      <Header heading="Products" />
      <TabHeader>
        <button
          onClick={() => {
            setTabs("Products");
          }}
          className={`border-b-[3px] p-2.5 pb-5 text-lg ${
            tabs === "Products"
              ? "border-denum  font-bold"
              : "border-gray-04 font-medium"
          }`}
        >
          Products
        </button>
        <button
          onClick={() => {
            setTabs("Categories");
          }}
          className={`border-b-[3px] p-2.5 pb-5 text-lg ${
            tabs === "Categories"
              ? " border-denum  font-bold"
              : "border-gray-04 font-medium"
          }`}
        >
          Categories
        </button>
      </TabHeader>
      <div className="p-6">
        {tabs === "Products" && (
          <div className="">
            <div className="flex justify-between gap-5 ">
              <Input size="large" id="input" type="search" placeholder="Search">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.46582 10.9467C6.46582 8.472 8.472 6.46582 10.9467 6.46582C13.4215 6.46582 15.4277 8.472 15.4277 10.9467C15.4277 13.4215 13.4215 15.4277 10.9467 15.4277C8.472 15.4277 6.46582 13.4215 6.46582 10.9467ZM10.9467 4.46582C7.36743 4.46582 4.46582 7.36743 4.46582 10.9467C4.46582 14.5261 7.36743 17.4277 10.9467 17.4277C12.3756 17.4277 13.6964 16.9653 14.7678 16.182L18.7102 20.1244L20.1244 18.7102L16.182 14.7678C16.9653 13.6964 17.4277 12.3756 17.4277 10.9467C17.4277 7.36743 14.5261 4.46582 10.9467 4.46582Z"
                  />
                </svg>
              </Input>
              <InputIcon placeholder="All Categories"></InputIcon>
              <div className="flex  items-center gap-5">
                <Checkbox id="checkbox" name="checkbox" value="1" />
                <p className="">Low Stock</p>
              </div>
              <Button
                size="large"
                text="Import Products"
                type="primary"
              ></Button>
              <Button size="large" text="New Product" type="primary"></Button>
            </div>

            <div className="mt-5">
              <div className="flex gap-5">
                <div className="p-6 ">
                  <p className="font-bold text-gray-01">TOTAL ITEMS</p>
                  <p className="mt-5 text-2xl font-bold"></p>
                </div>
                <div className="p-6 ">
                  <p className="font-bold text-gray-01">TOTAL STOCK VALUE</p>
                  <p className="mt-5 text-2xl font-bold">
                    <span>&euro;</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <table className="w-full table-auto text-left">
                <thead className="">
                  <tr className="font-bold text-gray-01 dirChildren:p-5">
                    <th>NAME</th>
                    <th>CATEGORY</th>
                    <th>PRICE</th>
                    <th>STOCK</th>
                    <th>STOCK VALUE</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="odd:bg-gray-07">
                  <tr className="odd:bg-gray-07">
                    <td className="p-5 font-medium">monkey</td>
                    <td className="p-5 font-medium">monkey</td>
                    <td className="p-5 font-medium">
                      <span>&euro;</span>monkey
                    </td>
                    <td className="p-5 font-medium">monkey</td>
                    <td className="p-5 font-medium">
                      <span>&euro;</span>monkey
                    </td>
                    <td className="relative p-5 font-medium">
                      <div className="absolute right-5 top-10 w-[200px] rounded-lg shadow-md">
                        <div className="flex gap-0.5 border-b border-gray-04 px-4 py-2.5">
                          <div className="fcen">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.045 7.40088C19.423 7.02288 19.631 6.52088 19.631 5.98688C19.631 5.45288 19.423 4.95088 19.045 4.57288L17.459 2.98688C17.081 2.60888 16.579 2.40088 16.045 2.40088C15.511 2.40088 15.009 2.60888 14.632 2.98588L4 13.5849V17.9999H8.413L19.045 7.40088ZM16.045 4.40088L17.632 5.98588L16.042 7.56988L14.456 5.98488L16.045 4.40088ZM6 15.9999V14.4149L13.04 7.39688L14.626 8.98288L7.587 15.9999H6ZM4 19.9999H20V21.9999H4V19.9999Z"
                                fill="#7A7E87"
                              />
                            </svg>
                          </div>
                          <p>Edit Product</p>
                        </div>
                        <div className="flex gap-0.5 px-4 py-2.5">
                          <div className="fcen">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
                                fill="#7A7E87"
                              />
                            </svg>
                          </div>

                          <p>Delete</p>
                        </div>
                      </div>

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
                </tbody>
              </table>
            </div>

            <div className="mt-20">
              <Pagination pages={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
            </div>
          </div>
        )}

        {tabs === "Categories" && <div className="">eotatnu</div>}
      </div>
    </div>
  );
}
export default Products;
