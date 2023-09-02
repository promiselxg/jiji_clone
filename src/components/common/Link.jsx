import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Links = ({ url, label, count, ...children }) => {
  return (
    <>
      <Link to={url} className="text-[14px] flex items-center gap-2">
        <span {...children}>{label}</span>
        {count && <span className="text-[#ccc]">{count}</span>}
      </Link>
    </>
  );
};

export default Links;
