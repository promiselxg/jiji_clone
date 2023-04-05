import React from 'react';
import SideNav from '../Navbar';
import ClassifiedAds from '../Ad';

const BodyWrapper = () => {
  return (
    <>
      <div className="w-full flex gap-3 container mx-auto py-4 relative">
        <SideNav />
        <ClassifiedAds />
      </div>
    </>
  );
};

export default BodyWrapper;
