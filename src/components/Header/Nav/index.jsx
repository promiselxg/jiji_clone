import React, { useContext } from 'react';
import Modal from '../../Modal';
import { Link } from 'react-router-dom';
import FormToggleContext from '../../../context/FormToggleContext';

const HeaderNav = () => {
  const { switchScreen, model } = useContext(FormToggleContext);
  return (
    <>
      <div
        className="bg-[#00B53F] w-full text-white pt-[4px] fixed min-h-[56px] z-[9999]"
        style={{ boxShadow: 'box-shadow: 1px 1px 4px rgba(80,114,125,.4)' }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="logo">
            <Link to="/">
              <img
                src="https://play-lh.googleusercontent.com/r1iugk-4gWDV0nSxTjxakdEW_fNAGlhh3MC7QQQ6ij3uD3IYpjPk5dF6drhcCuoc9kQ"
                alt="jiji"
                className="w-15 h-12"
              />
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex gap-2 text-whitesmoke">
              <label
                onClick={() => switchScreen('loginWithSocial')}
                htmlFor={model}
                className="cursor-pointer"
              >
                Sign in
              </label>
              <span>|</span>
              <label
                onClick={() => switchScreen('registerWithSocial')}
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
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
