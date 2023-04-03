import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({ url, label }) => {
  return (
    <>
      <Link to={url} className="text-[14px]">
        {label}
      </Link>
    </>
  );
};

export default Links;
