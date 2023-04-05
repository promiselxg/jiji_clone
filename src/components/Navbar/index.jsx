import React, { useState } from 'react';
import SidebarList from '../List/Sidebar.List';

const SideNav = () => {
  const [fixedSideBar, setFixedSideBar] = useState(false);
  const [showSubCategories, setShowSubCategories] = useState(false);
  const scrollDown = () => {
    if (window.scrollY >= 200) {
      setFixedSideBar(true);
    } else {
      setFixedSideBar(false);
    }
  };
  window.addEventListener('scroll', scrollDown);
  return (
    <>
      <div className="relative bg-[green]">
        <div
          className={`w-[300px] min-w-[305px] h-[500px] relative shadow-md bg-white overflow-y-scroll sidebar ${
            fixedSideBar ? 'sticky top-[4.5rem]' : ''
          }`}
          style={{ boxShadow: '1px 1px 4px rgba(80,114,125,.4)' }}
        >
          <div>
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/vehicles.png`}
              title="Vehicles"
              count="203,400"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/real-estate.png`}
              title="Property"
              count="93,208"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/mobile.png`}
              title="Mobile Phones & Tablets"
              count="71,165"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/electronics.png`}
              title="Elctronics"
              count="203,400"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/home.png`}
              title="Home, Furniture & Appliances"
              count="73,400"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/beauty.png`}
              title="Health & Beauty"
              count="203,400"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/fashion.png`}
              title="Fashion"
              count="192,866"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/hobbies.png`}
              title="Sports, Arts & Outdoors"
              count="61,400"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/jobseekers.png`}
              title="Seeking Work CVs"
              count="46,930"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/services.png`}
              title="Services"
              count="60,400"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/jobs.png`}
              title="Jobs"
              count="1,400"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/babies.png`}
              title="Babbies & Kids"
              count="28,400"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/animals.png`}
              title="Animals & Pets"
              count="9,611"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/agriculture.png`}
              title="Agriculture"
              count="22,786"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/equipment.png`}
              title="Commercial Equipment & Tools"
              count="124,400"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
            <SidebarList
              img={`https://assets.jiji.ng/art/attributes/categories/repair.png`}
              title="Repair & Construction"
              count="215,400"
              onMouseEnter={() => setShowSubCategories(true)}
              onMouseLeave={() => !setShowSubCategories()}
            />
          </div>
        </div>
        <div
          className={`w-[300px] min-w-[305px] h-[500px]  shadow-md bg-white sidebar absolute left-[306px] top-0 z-10 ${
            showSubCategories ? 'block' : 'hidden'
          }`}
          onMouseEnter={() => setShowSubCategories(true)}
          onMouseLeave={() => !setShowSubCategories()}
        >
          <SidebarList
            img={`https://assets.jiji.ng/art/attributes/categories/vehicles.png`}
            title="Vehicles"
            count="203,400"
          />
        </div>
      </div>
    </>
  );
};

export default SideNav;
