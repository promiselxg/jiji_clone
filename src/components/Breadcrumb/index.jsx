import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ data }) => {
  return (
    <>
      <div className="breadcrumbs">
        <ul>
          <li className="bg-white rounded-[15px] px-[8px] py-[1px] text-[12px]">
            <a>Jiji</a>
          </li>
          {data.map((link, i) => {
            return (
              <li key={i} className="">
                <Link className="text-sm hover:text-black" to={link.url}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Breadcrumb;
