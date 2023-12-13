import React from "react";

const ListDetail = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.selectedItem.content}</p>
    </div>
  );
};

export default ListDetail;
