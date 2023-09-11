import React from "react";
import NavLinks from "./navLinks";

const Navbar = () => {
  const [isShow, setIshow] = React.useState(false);
  return (
    <>
      <div className="flex w-full relative  ">
        <div className="flex flex-col w-full gap-y-1">
          <NavLinks
            img="https://assets.jijistatic.com/art/attributes/categories/vehicles.png"
            label="Vehicles"
            count="236,567"
            onMouseEnter={() => setIshow(true)}
            onMouseLeave={() => setIshow(false)}
            url="/vehicles"
          />
          <NavLinks
            img="https://assets.jijistatic.com/art/attributes/categories/real-estate.png"
            label="Property"
            count="108,819"
            onMouseEnter={() => setIshow(true)}
            onMouseLeave={() => setIshow(false)}
            url="/vehicles"
          />
          <NavLinks
            img="https://assets.jijistatic.com/art/attributes/categories/mobile.png"
            label="Mobile Phones & Tablets"
            count="73,813"
            onMouseEnter={() => setIshow(true)}
            onMouseLeave={() => setIshow(false)}
            url="/vehicles"
          />
          <NavLinks
            img="https://assets.jijistatic.com/art/attributes/categories/electronics.png"
            label="Electronics"
            count="408,882"
            onMouseEnter={() => setIshow(true)}
            onMouseLeave={() => setIshow(false)}
            url="/vehicles"
          />
          <NavLinks
            img="https://assets.jijistatic.com/art/attributes/categories/home.png"
            label="Home, Furniture & Appliances"
            count="210,355"
            onMouseEnter={() => setIshow(true)}
            onMouseLeave={() => setIshow(false)}
            url="/vehicles"
          />
          <NavLinks
            img="https://assets.jijistatic.com/art/attributes/categories/beauty.png"
            label="Health & Beauty"
            count="77,567"
            onMouseEnter={() => setIshow(true)}
            onMouseLeave={() => setIshow(false)}
            url="/vehicles"
          />
          <NavLinks
            img="https://assets.jijistatic.com/art/attributes/categories/fashion.png"
            label="Fashion"
            count="179,946"
            onMouseEnter={() => setIshow(true)}
            onMouseLeave={() => setIshow(false)}
            url="/vehicles"
          />
          <NavLinks
            img="https://assets.jijistatic.com/art/attributes/categories/hobbies.png"
            label="Sports, Arts & Outdoors"
            count="692,244"
            onMouseEnter={() => setIshow(true)}
            onMouseLeave={() => setIshow(false)}
            url="/vehicles"
          />
          <NavLinks
            img="https://assets.jijistatic.com/art/attributes/categories/jobseekers.png"
            label="Seeking Work CVs"
            count="47,115"
            onMouseEnter={() => setIshow(true)}
            onMouseLeave={() => setIshow(false)}
            url="/vehicles"
          />
          <NavLinks
            img="https://assets.jijistatic.com/art/attributes/categories/services.png"
            label="Services"
            count="58,567"
            onMouseEnter={() => setIshow(true)}
            onMouseLeave={() => setIshow(false)}
            url="/vehicles"
          />
          {/* <NavLinks
            img="https://assets.jijistatic.com/art/attributes/categories/vehicles.png"
            label="Vehicles"
            count="236,567"
            onMouseEnter={() => setIshow(true)}
            onMouseLeave={() => setIshow(false)}
          />
          <NavLinks
            img="https://assets.jijistatic.com/art/attributes/categories/vehicles.png"
            label="Vehicles"
            count="236,567"
            onMouseEnter={() => setIshow(true)}
            onMouseLeave={() => setIshow(false)}
          /> */}
        </div>
      </div>
      {isShow && (
        <div
          className="flex bg-white h-[550px] absolute w-full  left-[320px] top-0 border-l-[red]"
          style={{
            boxShadow: "2px 2px 4px 0 rgba(0,0,0,.08)",
            borderLeft: "1px solid #00b53f",
          }}
        >
          deede
        </div>
      )}
    </>
  );
};

export default Navbar;
