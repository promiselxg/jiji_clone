import { Breadcrumb, Image, ToggleBox } from '../../../components';
import { BreadcrumbLabel } from '../../../components/Breadcrumb';
import { Category, Location } from '../../pages.components';

import VerifiedByJiji from './ui/VerifiedByJiji';
import Make from './ui/Make';
import YearOfManufaturing from './ui/YearOfManufature';
import ListItem from './ui/ListItem';
import { BiSortAlt2, BiListUl, BiGridAlt, BiMap } from 'react-icons/bi';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Car = () => {
  const links = [
    {
      label: 'Vehicles',
      url: 'vehicles',
    },
  ];
  const images = [
    'https://picsum.photos/200/300?image=1050',
    'https://picsum.photos/300/300?image=206',
    'https://picsum.photos/200/500?image=1050',
    'https://picsum.photos/300/300?image=206',
    'https://picsum.photos/200/400?image=1050',
    'https://picsum.photos/300/300?image=206',
    'https://picsum.photos/200/300?image=1050',
    'https://picsum.photos/300/250?image=206',
  ];
  return (
    <>
      <div className="container mx-auto my-[60px] w-full">
        <div className="flex items-center gap-2 text-sm text-[#bbb]">
          <Breadcrumb data={links} />/{' '}
          <BreadcrumbLabel label="83485 results for Cars in Nigeria" />
        </div>
        <div className="flex w-full gap-3 mt-1 ">
          <div className="w-1/4 ">
            <div className="flex flex-col mb-3">
              <Category label="Categories" bg="green" />
            </div>
            <div className="flex flex-col mb-3">
              <Location />
            </div>
            <div className="flex flex-col mb-3">
              <ToggleBox title="Verified by Jiji">
                <VerifiedByJiji />
              </ToggleBox>
            </div>
            <div className="flex flex-col mb-3">
              <ToggleBox title="Make">
                <Make />
              </ToggleBox>
            </div>
            <div className="flex flex-col mb-3">
              <ToggleBox title="Year of Manudacture">
                <YearOfManufaturing />
              </ToggleBox>
            </div>
          </div>
          <div className="w-3/4">
            <div className="flex flex-col">
              <div className="w-full grid grid-cols-3 gap-2 bg-white shadow rounded-[5px] p-2">
                <div className="div">
                  <Image
                    img="https://pictures-nigeria.jijistatic.com/JIJI-13466/028b96d9fd724592b6c4d39e652bcbc3"
                    alt="image"
                  />
                </div>
                <div className="div">
                  <Image
                    img="https://pictures-nigeria.jijistatic.com/JIJI-13466/be2444e8f91f41edaed9326a7ff78163"
                    alt="image"
                  />
                </div>
                <div className="div">
                  <Image
                    img="https://pictures-nigeria.jijistatic.com/JIJI-13466/27b9ea1120d14ad3a9a0bd9e27f59a32"
                    alt="image"
                  />
                </div>
              </div>
              <h1 className="my-4 font-[600] text-[22px]">Cars in Nigeria</h1>
              <div className="w-full grid grid-cols-4 gap-2 bg-white p-4 rounded-tl-[5px] rounded-tr-[5px]">
                <div className="w-full bg-[#ebf2f7] p-2 rounded-[8px] cursor-pointer text-center">
                  {`<`} &#8358; 1M
                </div>
                <div className="w-full bg-[#ebf2f7] p-2 rounded-[8px] cursor-pointer text-center">
                  &#8358; 1-3M
                </div>
                <div className="w-full bg-[#ebf2f7] p-2 rounded-[8px] cursor-pointer text-center">
                  &#8358; 3-5M
                </div>
                <div className="w-full bg-[#ebf2f7] p-2 rounded-[8px] cursor-pointer text-center">
                  {`>`} &#8358; 5M
                </div>
              </div>
              <div className="w-full grid grid-cols-7 gap-2 bg-white  rounded-bl-[5px] rounded-br-[5px] px-4 pt-2 pb-4">
                <ListItem
                  img="https://assets.jiji.ng/art/attributes/top-selection/cars2x-tinifield/toyota2x.png"
                  name="toyota"
                />
                <ListItem
                  img="https://assets.jiji.ng/art/attributes/top-selection/cars2x-tinifield/lexus2x.png"
                  name="lexus"
                />
                <ListItem
                  img="https://assets.jiji.ng/art/attributes/top-selection/cars2x-tinifield/merdeces2x.png"
                  name="mercedes-benz"
                />
                <ListItem
                  img="https://assets.jiji.ng/art/attributes/top-selection/cars2x-tinifield/honda2x.png"
                  name="honda"
                />
                <ListItem
                  img="https://assets.jiji.ng/art/attributes/top-selection/cars2x-tinifield/ford2x.png"
                  name="ford"
                />
                <ListItem
                  img="https://assets.jiji.ng/art/attributes/top-selection/cars2x-tinifield/hyundai.png"
                  name="hyundai"
                />
                <ListItem
                  img="https://assets.jiji.ng/art/attributes/top-selection/cars2x-tinifield/land-rover2x.png"
                  name="land rover"
                />
              </div>
              <div className="flex items-center justify-between py-5">
                <div className="flex gap-1 text-[20px] cursor-pointer">
                  <span>
                    <BiGridAlt />
                  </span>
                  <span>
                    <BiListUl />
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Sort by:</span>
                  <span className="flex items-center gap-1 text-[green] cursor-pointer">
                    <BiSortAlt2 className="text-[20px]" />
                    Recommended
                  </span>
                </div>
              </div>

              <div className="w-full">
                <ResponsiveMasonry>
                  <Masonry columnsCount={3} gutter="10px">
                    {images.map((image, i) => (
                      <div key={i}>
                        <img src={image} className="rounded-lg w-full" />
                      </div>
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Car;
