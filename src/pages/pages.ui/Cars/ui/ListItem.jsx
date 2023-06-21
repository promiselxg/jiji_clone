import React from 'react';

const ListItem = (props) => {
  return (
    <>
      <div className="flex flex-col text-center gap-2 justify-center py-2 rounded-[5px] hover:bg-[rgba(61,184,58,.16)] cursor-pointer">
        <span className="flex justify-center">
          <img
            src={props.img}
            alt={props.name}
            className="h-[50px] w-[50px] object-contain "
            srcSet=""
          />
        </span>
        <span className="text-sm capitalize">{props.name}</span>
      </div>
    </>
  );
};

export default ListItem;
