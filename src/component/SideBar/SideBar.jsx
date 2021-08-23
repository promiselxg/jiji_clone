import Item from "./Item";
import "./SideBar.scss";
const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <Item
          Image="https://assets.jiji.ng/art/attributes/categories/vehicles.png"
          title="vehicle"
          count="140,200"
        />
        <Item
          Image="https://assets.jiji.ng/art/attributes/categories/real-estate.png"
          title="property"
          count="69,201"
        />
        <Item
          Image="https://assets.jiji.ng/art/attributes/categories/mobile.png"
          title="mobile phones &amp; tablets"
          count="77,280"
        />
        <Item
          Image="https://assets.jiji.ng/art/attributes/categories/electronics.png"
          title="electronics"
          count="198,773"
        />
        <Item
          Image="https://assets.jiji.ng/art/attributes/categories/home.png"
          title="home, furniture &amp; appliances"
          count="140,200"
        />
        <Item
          Image="https://assets.jiji.ng/art/attributes/categories/beauty.png"
          title="health &amp; beauty"
          count="140,200"
        />
        <Item
          Image="https://assets.jiji.ng/art/attributes/categories/fashion.png"
          title="fashion"
          count="20,200"
        />
        <Item
          Image="https://assets.jiji.ng/art/attributes/categories/hobbies.png"
          title="spots, arts &amp; outdoors"
          count="11,201"
        />
        <Item
          Image="https://assets.jiji.ng/art/attributes/categories/jobseekers.png"
          title="seaking work - CVS"
          count="55,536"
        />
        <Item
          Image="https://assets.jiji.ng/art/attributes/categories/services.png"
          title="services"
          count="51,227"
        />
      </div>
    </>
  );
};

export default SideBar;
