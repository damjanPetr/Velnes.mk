import Button from "../components/buttons/Button";
import InputIcon from "../components/inputs/InputIcon";
import Header from "../components/navigation/Header";
import TabHeader from "../components/navigation/TabHeader";

function Reports() {
  return (
    <div>
      <Header heading="Reports" />
      <TabHeader>
        <button className={`border-b-[3px] p-2.5 pb-5 text-lg font-bold `}>
          Totals
        </button>
      </TabHeader>
      <div className="p-6">
        <div className="flex items-center">
          <InputIcon placeholder="Today"></InputIcon>
          <div className="flex flex-1 justify-end gap-5">
            <InputIcon placeholder="Export"></InputIcon>
            <Button type="primary" size="large" text="Print"></Button>
          </div>
        </div>
        <div className="mt-[28px] flex w-full items-center gap-5 ">
          <div className="flex-1 rounded-lg border border-gray-04 p-6 font-bold">
            <p className="text-base text-gray-01">INVOICES</p>
            <p className="mt-5 text-2xl">18</p>
          </div>
          <div className="flex-1 rounded-lg border border-gray-04 p-6 font-bold">
            <p className="text-base text-gray-01">APPOINTMENTS</p>
            <p className="mt-5 text-2xl">15</p>
          </div>
          <div className="flex-1 rounded-lg border border-gray-04 p-6 font-bold">
            <p className="text-base text-gray-01">NEW CUSTOMERS</p>
            <p className="mt-5 text-2xl">44</p>
          </div>
        </div>
        <div className="mt-[30px] flex items-center gap-5">
          <div className="flex-1 rounded-lg border border-gray-04 p-[26px]">
            <h3 className="text-xl font-bold">Total</h3>
            <div className="mt-5">
              <div className="">
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Total revenue</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Total revenue incl. VAT</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Revenue products</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Revenue services</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Gift cards sold</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Revenue packages</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Revenue memberships </p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Total discounts</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Drawer transactions</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-lg border border-gray-04 p-[26px]">
            <h3 className="text-xl font-bold">Payment methods</h3>
            <div className="mt-5">
              <div className="">
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Cash</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Debit</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Credit card</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Bank transfer</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Online</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Coupon</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Gift card</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Prepaid card</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                  <p>Outstanding</p>
                  <p>
                    <span>&euro;</span>0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30px] flex-1 rounded-lg border border-gray-04 p-[26px]">
          <h3 className="text-xl font-bold">VAT</h3>
          <div className="mt-5">
            <div className="">
              <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                <p>Total VAT</p>
                <p>
                  <span>&euro;</span>0
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                <p>Base 20%</p>
                <p>
                  <span>&euro;</span>0
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-04 p-5 font-medium">
                <p>VAT 20%</p>
                <p>
                  <span>&euro;</span>0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reports;
