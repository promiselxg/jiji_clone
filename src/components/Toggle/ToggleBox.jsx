import { useState } from 'react';

const ToggleBox = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="bg-white rounded-[5px] ">
        <div
          className={`collapse  ${
            !toggle
              ? `collapse-open collapse-plus `
              : `collapse-close collapse-plus`
          }`}
        >
          <input
            type="checkbox"
            className="cursor-pointer"
            value={toggle}
            onClick={() => setToggle(!toggle)}
          />
          <div className="collapse-title ">{title}</div>
          <div className="collapse-content  text-black ">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ToggleBox;
