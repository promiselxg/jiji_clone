import Breadcrumb from '../../../components/Breadcrumb';

const Phone = () => {
  const links = [
    {
      label: 'Phone',
      url: 'phone-depot',
    },
  ];
  return (
    <>
      <div className="container mx-auto my-[60px] w-full">
        <div className="flex items-center gap-2 text-sm text-[#bbb]">
          <Breadcrumb data={links} />/ Phones depo
        </div>
        <h1>Phone</h1>
      </div>
    </>
  );
};

export default Phone;
