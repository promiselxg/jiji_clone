/* eslint-disable react/prop-types */
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

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

export const BreadcrumbsWithIcon = () => {
  return (
    <Breadcrumbs className=" w-full">
      <a href="#" className="opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </a>
      <a href="#" className="opacity-60">
        <span>Components</span>
      </a>
      <a href="#">Breadcrumbs</a>
    </Breadcrumbs>
  );
};
