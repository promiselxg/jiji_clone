import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const Cars = () => {
  const links = [
    {
      label: 'Cars',
      url: 'cars-depot',
    },
  ];
  return (
    <>
      <div className="container mx-auto my-[60px] w-full">
        <div className="flex items-center gap-2 text-sm text-[#bbb]">
          <Breadcrumb data={links} />/ okay
        </div>
        <h1>Cars</h1>
      </div>
    </>
  );
};

export default Cars;
