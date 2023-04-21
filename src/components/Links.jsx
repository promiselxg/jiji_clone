import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({ url, label, ...children }) => {
  return (
    <>
      <Link to={url} className="text-[14px]" {...children}>
        {label}
      </Link>
    </>
  );
};

export default Links;
