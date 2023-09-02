import React, { useContext } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import Links from "../../common/Link";
import SocialAccount from "../../common/Social";
import FormToggleContext from "../../../contexts/FormToggleContext";

const RegisterWithPhone = () => {
  const { model, switchScreen } = useContext(FormToggleContext);
  return (
    <>
      <div className="container">
        <p className="py-1 text-sm font-[500]">Register via email or phone</p>
        <form>
          <div className="flex w-full pt-2 mb-3">
            <input
              type="text"
              placeholder="Enter email"
              className="w-full border border-[#ddd] rounded p-3 outline-none bg-white"
            />
          </div>
          <div className="flex w-full border border-[#ddd] rounded p-3 mb-3 items-center gap-2">
            <input
              type="password"
              placeholder="Password"
              autoComplete="password"
              className="w-full outline-none bg-white "
            />
            <FiEyeOff className="cursor-pointer" />
          </div>
          <div className="text-[12px] mt-[-10px] ml-[10px] text-gray-400">
            Never disclose your Jiji password to anyone
          </div>
          <div className="flex w-full pt-2 mb-1">
            <input
              type="text"
              placeholder="First name"
              className="w-full border border-[#ddd] rounded p-3 outline-none bg-white"
            />
          </div>
          <div className="flex w-full pt-2 mb-1">
            <input
              type="text"
              placeholder="Last name (optional)"
              className="w-full border border-[#ddd] rounded p-3 outline-none bg-white"
            />
          </div>
          <div className="flex w-full pt-2 mb-1">
            <input
              type="text"
              placeholder="Phone (digits only)"
              className="w-full border border-[#ddd] rounded p-3 outline-none bg-white"
            />
          </div>
          <div className="flex items-center py-2 gap-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="checkbox checkbox-accent w-[15px] h-[15px] rounded-none"
            />
            <Links
              url="/"
              label="I agree with rules"
              className="text-[green] text-sm font-semibold"
            />
          </div>
          <button
            className=" btn w-full gap-4 bg-[#00b53f] text-[#fff] px-10  border-none text-[16px] uppercase font-[600] rounded hover:bg-green-600 disabled:opacity-75 disabled:bg-[#00b53f] disabled:text-white "
            disabled
          >
            Register
          </button>
        </form>
        <div className="text-center items-center pt-2">
          <p className="text-[12px]">
            {" "}
            Already have an account?
            <label
              htmlFor={model}
              onClick={() => switchScreen("loginWithSocial")}
              className="text-[green] font-[600] text-sm ml-1 cursor-pointer"
            >
              Sign in
            </label>
          </p>
        </div>
        <SocialAccount />
      </div>
    </>
  );
};

export default RegisterWithPhone;
