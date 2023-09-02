import { Link } from "react-router-dom";
import CustomButton from "./Button";
import { FiSearch, FiMapPin } from "react-icons/fi";
const Header = () => {
  return (
    <>
      <div
        className="flex w-full bg-[#00b53f] text-white min-h-[60px] fixed top-0 right-0 z-50"
        style={{ boxShadow: "1px 1px 4px rgba(80,114,125,.4)" }}
      >
        <div className="container flex justify-between mx-auto w-[85%] items-center">
          <div className="flex items-center justify-between w-1/2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/15/Jiji_africa.jpg"
              alt=""
              className="w-[60px] h-[60px]"
            />
            <span className="text-white opacity-30">
              <h1 className="text-white font-HelveticaBold">
                SELL FASTER BUY SMARTER
              </h1>
            </span>
          </div>
          <div className="flex  gap-5">
            <div className="flex items-center">
              <ul className="flex items-center gap-2 font-HelveticaMedium text-[12px]">
                <li>
                  <Link to="/">Sign In</Link>
                </li>
                <li>|</li>
                <li>
                  <Link to="/">Registration</Link>
                </li>
              </ul>
            </div>
            <CustomButton
              label="SELL"
              bg="red"
              onClick={() => alert(1)}
              style={{
                background: "#ffaf45",
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="flex w-full h-[300px] mt-[60px] items-center"
        style={{
          background: "linear-gradient(160.29deg,#00b53f .67%,#00831e 100.93%)",
        }}
      >
        <div className="container pb-10 flex mx-auto flex-col">
          <div className="flex items-center mx-auto gap-2 mb-10">
            <h2 className="text-white font-HelveticaMedium">
              Find anything in{" "}
            </h2>
            <span className="flex items-center  gap-2 bg-black text-white px-3 py-1 rounded text-[12px] font-HelveticaMedium">
              <FiMapPin /> All Nigeria
            </span>
          </div>
          <div className="bg-white w-[50%] mx-auto flex items-center p-3 rounded-[3px]">
            <input
              type="text"
              name=""
              id=""
              className="w-full bg-transparent outline-none border-none mr-5 text-green-light"
              placeholder="I am looking for..."
            />
            <FiSearch className="text-[30px] text-green-light" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
