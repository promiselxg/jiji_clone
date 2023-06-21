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
                <Link
                  className="bg-white text-[rgba(0,0,0,0.4)] rounded-[15px] px-[8px] py-[1px] text-[12px] text-sm hover:text-black"
                  to={link.url}
                >
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

export const BreadcrumbLabel = (props) => {
  return (
    <>
      <span className="bg-white rounded-[15px] px-[8px] py-[1px] text-[12px]">
        {props.label}
      </span>
    </>
  );
};
