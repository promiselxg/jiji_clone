import React, { useState } from 'react';

const VerifiedByJiji = () => {
  const [verified, setVerified] = useState('show_all');
  return (
    <>
      <div className="flex flex-col mb-2">
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="radio"
            name="verified_by"
            value="show_all"
            className="radio checked:bg-[green]"
            checked={verified === 'show_all'}
            onChange={(e) => setVerified(e.target.value)}
          />
          <span
            className={`label-text  font-[600] ${
              verified === 'show_all' && `text-[green]`
            }`}
          >
            Show all
          </span>
        </label>
      </div>
      <div className="flex flex-col mb-2">
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="radio"
            name="verified_by"
            className="radio checked:bg-[green]"
            checked={verified === 'verified'}
            onChange={(e) => setVerified(e.target.value)}
            value="verified"
          />
          <span
            className={`label-text  font-[600] ${
              verified === 'verified' && `text-[green]`
            }`}
          >
            Verified by Jij | 2304
          </span>
        </label>
      </div>
      <div className="flex flex-col mb-2">
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="radio"
            name="verified_by"
            className="radio checked:bg-[green]"
            checked={verified === 'not_verified'}
            onChange={(e) => setVerified(e.target.value)}
            value="not_verified"
          />
          <span
            className={`label-text  font-[600] ${
              verified === 'not_verified' && `text-[green]`
            }`}
          >
            Not verified
          </span>
        </label>
      </div>
    </>
  );
};

export default VerifiedByJiji;
