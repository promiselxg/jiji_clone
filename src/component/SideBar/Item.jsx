import { ChevronRight } from "@material-ui/icons";
const Item = ({ Image, title, count }) => {
  return (
    <>
      <div className="sidebar__nav">
        <div className="item">
          <div className="nav__image">
            <img src={Image} alt="vehicle" />
          </div>
          <div className="nav__details">
            <div className="title">{title}</div>
            <div className="count">
              <p>{count} ads</p>
            </div>
          </div>
        </div>
        <ChevronRight />
      </div>
    </>
  );
};

export default Item;
