import { Breadcrumb } from '../../../components';

const Property = () => {
  const links = [
    {
      label: 'Property',
      url: 'property-depot',
    },
  ];
  return (
    <>
      <div className="container mx-auto my-[60px] w-full">
        <div className="flex items-center gap-2 text-sm text-[#bbb]">
          <Breadcrumb data={links} />/ Property
        </div>
        <h1>Property</h1>
      </div>
    </>
  );
};

export default Property;
