import React from 'react';
import Search from '../Search';

const Hero = () => {
  return (
    <>
      <div
        className="flex justify-between pt-24 h-[350px]"
        style={{
          background:
            'linear-gradient(160.29deg,#00b53f .67%,#00831e 100.93%) ',
        }}
      >
        <div className="flex ml-36">
          <img
            src="https://assets.jiji.ng/static/img/main-page/man.png"
            alt="man"
          />
        </div>
        <Search />
        <div className="flex">
          <img
            src="https://assets.jiji.ng/static/img/main-page/girls.png"
            alt="female"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
