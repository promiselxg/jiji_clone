import React, { useContext } from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import Links from '../../Links';
import SocialAccount from '../../Social';
import FormToggleContext from '../../../context/FormToggleContext';

const LoginWithPhone = () => {
  const { model, switchScreen } = useContext(FormToggleContext);
  return (
    <>
      <div className="container">
        <p className="py-2 text-sm font-[500]">Sign in via email or phone</p>
        <form>
          <div className="flex w-full pt-2 mb-5">
            <input
              type="text"
              placeholder="Email or Phone"
              className="w-full border rounded p-3 outline-none"
            />
          </div>
          <div className="flex w-full border rounded p-3 items-center gap-2">
            <input
              type="password"
              placeholder="Password"
              autoComplete="password"
              className="w-full outline-none"
            />
            <FiEyeOff className="cursor-pointer" />
          </div>
          <div className=" w-full text-right py-3">
            <Links
              url="/"
              label="Forgot your password?"
              className="text-center text-[green] text-sm font-[600]"
            />
          </div>
          <button
            className=" btn w-full gap-4 bg-[#00b53f] text-[#fff] px-10  border-none text-[16px] uppercase font-[600] rounded hover:bg-green-600 disabled:opacity-75 disabled:bg-[#00b53f] disabled:text-white "
            disabled
          >
            SIGN IN
          </button>
        </form>
        <div className="text-center items-center pt-2">
          <p className="text-[12px]">
            {' '}
            Don't have an account?
            <label
              htmlFor={model}
              onClick={() => switchScreen('registerWithSocial')}
              className="text-[green] font-[600] text-sm ml-1 cursor-pointer"
            >
              Registration
            </label>
          </p>
        </div>
        <SocialAccount />
      </div>
    </>
  );
};

export default LoginWithPhone;
