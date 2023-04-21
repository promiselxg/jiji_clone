import LoginWithSocial from './Login/LoginWithSocial';
import RegisterWithSocial from './Register/RegisterWithSocial';
import DataContext from '../../context/DataContext';
import LoginWithPhone from './Login/LoginWithPhone';
import RegisterWithPhone from './Register/RegisterWithPhone';
import { useContext } from 'react';

const Modal = () => {
  const { model } = useContext(DataContext);

  let wrapper = '';
  if (model === 'loginWithSocial') {
    wrapper = <LoginWithSocial />;
  } else if (model === 'registerWithSocial') {
    wrapper = <RegisterWithSocial />;
  } else if (model === 'loginWithPhone') {
    wrapper = <LoginWithPhone />;
  } else if (model === 'registerWithPhone') {
    wrapper = <RegisterWithPhone />;
  } else {
    wrapper = <LoginWithSocial />;
  }

  return (
    <>
      <input type="checkbox" id={model} className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box w-2/6  text-black rounded ">
          <label
            htmlFor={model}
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-transparent border-none text-[#d8c5c5] text-[1.3rem] hover:bg-transparent hover:text-black"
          >
            ✕
          </label>
          <div className="p-5 max-h-[500px]">
            <div className="flex justify-between gap-5 pb-5">
              <button className="btn bg-transparent text-[green] px-12 border-[#eee] text-[16px] capitalize font-light hover:bg-transparent hover:border-green-500">
                English
              </button>
              <button className="btn bg-transparent px-12 border-transparent text-slate-300 text-[16px] capitalize font-light hover:bg-transparent hover:border-green-500">
                Hausa
              </button>
            </div>
            {wrapper}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
