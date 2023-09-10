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
          />
          <NavLinks
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
          />
          <NavLinks
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
          />
          <NavLinks
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
          />
          <NavLinks
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
          />
          <NavLinks
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
          />
          <NavLinks
            img="https://assets.jijistatic.com/art/attributes/categories/vehicles.png"
            label="Vehicles"
            count="236,567"
            onMouseEnter={() => setIshow(true)}
            onMouseLeave={() => setIshow(false)}
          />
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
