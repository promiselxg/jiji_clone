import { useContext } from "react";
import Modal from "../modals";
import FormToggleContext from "../../contexts/FormToggleContext";

const Auth = () => {
  const { switchScreen, model } = useContext(FormToggleContext);
  return (
    <>
      <div className="flex items-center gap-5">
        <div className="flex gap-2 text-whitesmoke">
          <label
            onClick={() => switchScreen("loginWithSocial")}
            htmlFor={model}
            className="cursor-pointer"
          >
            Sign in
          </label>
          <span>|</span>
          <label
            onClick={() => switchScreen("registerWithSocial")}
            htmlFor={model}
            className="cursor-pointer"
          >
            Registration
          </label>
        </div>
        <button className="py-[10px] rounded-[5px] px-12 bg-[#FEA03C] border-0 text-sm hover:bg-[#EA7832]">
          SELL
        </button>
      </div>
      <Modal htmlFor={model} />
    </>
  );
};

export default Auth;
