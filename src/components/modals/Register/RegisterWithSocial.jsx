import React, { useContext } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

import Links from "../../common/Link";
import FormToggleContext from "../../../contexts/FormToggleContext";

const RegisterWithSocial = () => {
  const { model, switchScreen } = useContext(FormToggleContext);
  return (
    <>
      <div className="container w-full">
        <p className="text-[14px] font-[500]">Register</p>
        <div className="flex justify-between gap-3 w-full py-5">
          <button className="btn gap-4 bg-transparent text-[#000] px-10 border-[#eee] text-[16px] capitalize font-[600] rounded hover:text-white">
            <FaGoogle />
            Google
          </button>
          <button className="btn gap-4 bg-[#3b5998] text-[#fff] px-10  border-[#eee] text-[16px] capitalize font-[600] rounded">
            <FaFacebookF />
            Facebook
          </button>
        </div>
        <label
          htmlFor={model}
          onClick={() => switchScreen("registerWithPhone")}
          className="btn w-full gap-4 bg-[#00b53f] text-[#fff] px-10  border-none text-[16px] normal-case font-[600] rounded hover:bg-green-600"
        >
          Register via e-mail or phone
        </label>
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
        <div className="text-center items-center">
          <p className="text-[12px] flex text-center justify-center">
            By continuing you agree to the
            <Links
              url="/"
              label="Policy and Rules"
              className="text-[#333] font-[600] text-[12px] ml-1"
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterWithSocial;
