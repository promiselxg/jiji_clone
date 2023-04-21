import React from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

const SocialAccount = () => {
  return (
    <>
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
    </>
  );
};

export default SocialAccount;
