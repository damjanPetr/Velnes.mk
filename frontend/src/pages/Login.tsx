import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/buttons/Button";
import Input from "../components/inputs/Input";
import { useAuth } from "../helpers/AuthContext";
import axios from "../helpers/axios";
import authFunctions from "../hooks/authFunctions";

function Login() {
  const navigate = useNavigate();
  const [state, setState] = useState<
    "login" | "forgot_password" | "check_inbox"
  >("login");
  const [title, setTitle] = useState("Login");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ [x: string]: string }[]>([]);
  const [password, setPassword] = useState("");

  const { csrfToken, setUser, user } = useAuth();

  return (
    <div className="min-h-screen w-full bg-oxford-blue fcen">
      <div className="w-[700px] ">
        <div className="rounded-lg bg-white">
          {JSON.stringify(user)
            .split(",")
            .map((item, index) => (
              <p className="" key={index}>
                {item}
              </p>
            ))}

          <div className="border-b border-gray-04 px-[30px] py-[20px] text-center">
            <h2 className="text-lg font-bold">{title}</h2>
          </div>
          <form action="" className="relative">
            {errors.length > 0 ? <div className=""></div> : null}
            {state == "login" && (
              <div className="p-[30px]">
                <div className="register_inputs space-y-2.5">
                  <div className="">
                    <label
                      htmlFor="email"
                      className="mb-2 block font-bold text-gray-01"
                    >
                      EMAIL<sup>*</sup>
                    </label>
                    <Input
                      type="email"
                      size="large"
                      id="email"
                      handleChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="">
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
                      handleChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <p className="mt-[30px] text-sm font-medium">
                  By registering you will agree to our{" "}
                  <span className="text-denum">terms and conditions</span>.
                </p>
              </div>
            )}
            {state == "check_inbox" && (
              <div className="p-[30px]">
                <div className="register_inputs space-y-2.5">
                  <div className="">
                    <p>
                      We have emailed k.stojanovska@velnes.mk with your password
                      reset instructions. If the email doesn't appear soon,
                      check your spam folder.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {state == "forgot_password" && (
              <div className="p-[30px]">
                <div className="register_inputs space-y-2.5">
                  <div className="">
                    <label
                      htmlFor="reset_email"
                      className="mb-2 block font-medium text-black"
                    >
                      Please fill in your email to reset password
                    </label>
                    <Input type="email" size="large" id="reset_email" />
                  </div>
                </div>
              </div>
            )}
            {state == "login" && (
              <div className="flex  justify-between gap-[20px] border-t border-gray-04 p-[30px]">
                <Button
                  size="large"
                  text="Forgot Password?"
                  type="secondary"
                  handleClick={() => {
                    setState("forgot_password");
                    setTitle("Forgot Password?");
                  }}
                  optinal="flex-1"
                />
                <Button
                  optinal="flex-1"
                  size="large"
                  text="Log In"
                  type="primary"
                  handleClick={async (e: React.MouseEvent) => {
                    e.preventDefault();
                    await csrfToken();
                    await authFunctions.login(email, password);
                    const response = await axios.get("/api/user");

                    if (response.data) {
                      setUser(response.data);
                      navigate("/welcome");
                    }
                  }}
                />
              </div>
            )}
            {state == "check_inbox" && (
              <div className="flex  justify-between gap-[20px] border-t border-gray-04 p-[30px]">
                <Button
                  size="large"
                  text="Back to Login"
                  type="secondary"
                  handleClick={() => {
                    setState("login");
                    setTitle("Login");
                  }}
                  optinal="flex-1"
                />
              </div>
            )}
            {state == "forgot_password" && (
              <div className="flex justify-between gap-[20px] border-t border-gray-04 p-[30px]">
                <Button
                  size="large"
                  text="Back to Login"
                  type="secondary"
                  handleClick={() => {
                    setState("login");
                  }}
                  optinal="flex-1"
                />
                <Button
                  size="large"
                  text="Reset"
                  type="primary"
                  handleClick={() => {
                    setState("check_inbox");
                    setTitle("Check your inbox");
                  }}
                  optinal="flex-1"
                />
              </div>
            )}
          </form>
        </div>
        {state == "login" && (
          <div className="mt-[30px]">
            <div className="mx-auto flex justify-center gap-[20px]  text-white">
              <p className="font-medium">Don't have an account?</p>
              <Link to="/register" className="font-bold">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Login;
