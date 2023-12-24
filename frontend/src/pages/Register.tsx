import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import Input from "../components/inputs/Input";
import { useState } from "react";
import useAuth from "../hooks/authFunctions";

function Register() {
  const { register } = useAuth();
  const [registerProp, setRegisterProp] = useState<{
    name: string;
    company_name: string;
    email: string;
    password: string;
    phone_number: string;
  }>({
    name: "",
    company_name: "",
    email: "",
    password: "",
    phone_number: "",
  });

  const [popUp, setPopUp] = useState<boolean>(false);
  return (
    <div className="min-h-screen w-full bg-oxford-blue fcen">
      <div className="w-[700px] ">
        <div className="rounded-lg bg-white">
          <div className="border-b border-gray-04 px-[30px] py-[20px] text-center">
            <h2 className="text-lg font-bold">Join us for free</h2>
          </div>
          <form action="" className="">
            <div className="p-[30px]">
              <div className="register_inputs space-y-2.5">
                <div className="">
                  <label
                    htmlFor="name"
                    className="mb-2 block font-bold text-gray-01"
                  >
                    Full NAME<sup>*</sup>
                  </label>
                  <Input
                    type="text"
                    size="large"
                    id="name"
                    handleChange={(e) => {
                      setRegisterProp({
                        ...registerProp,
                        name: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="company_name"
                    className="mb-2 block font-bold text-gray-01"
                  >
                    COMPANY NAME<sup>*</sup>
                  </label>
                  <Input
                    type="text"
                    size="large"
                    id="company_name"
                    handleChange={(e) => {
                      setRegisterProp({
                        ...registerProp,
                        company_name: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="email"
                    className="mb-2 block font-bold text-gray-01"
                  >
                    YOUR WORK EMAIL ADDRESS<sup>*</sup>
                  </label>
                  <Input
                    type="email"
                    size="large"
                    id="email"
                    handleChange={(e) => {
                      setRegisterProp({
                        ...registerProp,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="number"
                    className="mb-2 block font-bold text-gray-01"
                  >
                    PHONE NUMBER<sup>*</sup>
                  </label>
                  <Input
                    type="phone"
                    size="large"
                    id="number"
                    handleChange={(e) => {
                      setRegisterProp({
                        ...registerProp,
                        phone_number: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="relative">
                  {popUp ? (
                    <div className="absolute  -top-full left-1/2 -mt-20  -translate-x-1/2 rounded-lg bg-gray-01 p-2.5 text-sm font-medium text-white transition-opacity">
                      <p className="mb-1 font-bold">Your password must:</p>
                      <div className="">
                        <div className="flex items-center gap-[5px]">
                          <p className="">Be at least 8 characters long</p>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-jasper"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.192 6.34424L11.949 10.5862L7.70697 6.34424L6.29297 7.75824L10.535 12.0002L6.29297 16.2422L7.70697 17.6562L11.949 13.4142L16.192 17.6562L17.606 16.2422L13.364 12.0002L17.606 7.75824L16.192 6.34424Z" />
                          </svg>
                        </div>

                        <div className="flex items-center gap-[5px]">
                          <p className="">
                            Contain at least one uppercase letter
                          </p>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-jasper"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.192 6.34424L11.949 10.5862L7.70697 6.34424L6.29297 7.75824L10.535 12.0002L6.29297 16.2422L7.70697 17.6562L11.949 13.4142L16.192 17.6562L17.606 16.2422L13.364 12.0002L17.606 7.75824L16.192 6.34424Z" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-[5px]">
                          <p className="">
                            Contain at least one lowercase letter
                          </p>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-jasper"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.192 6.34424L11.949 10.5862L7.70697 6.34424L6.29297 7.75824L10.535 12.0002L6.29297 16.2422L7.70697 17.6562L11.949 13.4142L16.192 17.6562L17.606 16.2422L13.364 12.0002L17.606 7.75824L16.192 6.34424Z" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-[5px]">
                          <p className="">Contain at least one number</p>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-jasper"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.192 6.34424L11.949 10.5862L7.70697 6.34424L6.29297 7.75824L10.535 12.0002L6.29297 16.2422L7.70697 17.6562L11.949 13.4142L16.192 17.6562L17.606 16.2422L13.364 12.0002L17.606 7.75824L16.192 6.34424Z" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-[5px]">
                          <p className="">Contain at least one symbol </p>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-jasper"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.192 6.34424L11.949 10.5862L7.70697 6.34424L6.29297 7.75824L10.535 12.0002L6.29297 16.2422L7.70697 17.6562L11.949 13.4142L16.192 17.6562L17.606 16.2422L13.364 12.0002L17.606 7.75824L16.192 6.34424Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <label
                    htmlFor="password"
                    className="mb-2 block font-bold text-gray-01"
                  >
                    PASSWORD<sup>*</sup>
                  </label>
                  <Input
                    type="password"
                    size="large"
                    icon="eye"
                    id="password"
                    handleFocus={() => {
                      setPopUp(true);
                      setTimeout(() => {
                        setPopUp(false);
                      }, 3000);
                    }}
                    handleChange={(e) => {
                      setRegisterProp({
                        ...registerProp,
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <p className="mt-[30px] text-sm font-medium">
                By registering you will agree to our{" "}
                <span className="text-denum">terms and conditions</span>.
              </p>
            </div>
            <div className="border-t border-gray-04 p-[30px] fcen">
              <Button
                size="large"
                text="Get started"
                type="primary"
                optinal="flex-1"
                handleClick={async (e) => {
                  e.preventDefault();
                  const data = await register(registerProp);
                  console.log(data);
                }}
              />
            </div>
          </form>
        </div>
        <div className="mt-[30px]">
          <div className="mx-auto flex justify-center gap-[20px]  text-white">
            <p className="font-medium">Already have an account?</p>
            <Link to="/login" className="font-bold hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
