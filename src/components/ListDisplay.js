import React, { useState } from "react";
import ListDetail from "./ListDetail";

const listData = [
  {
    title: "Tab 1",
    content: "This is the content for Tab 1.",
  },
  {
    title: "Tab 2",
    content: "This is the content for Tab 2.",
  },
  {
    title: "Tab 3",
    content: "This is the content for Tab 3.",
  },
];

// not working if i am tagging display function in ul directly
// const display = () => {
//   listData.map((list) => <li>{list.title}</li>);
// };

const ListDisplay = () => {
  const [selectedList, setSelectedList] = useState(listData[0]);

  const showDetails = (item) => {
    setSelectedList(item);
  };

  return (
    <div>
      <h1>List display</h1>
      <ul>
        {listData.map((list, index) => (
          <li onClick={() => showDetails(list)} key={index}>
            {list.title}
          </li>
        ))}
      </ul>
      <ListDetail selectedItem={selectedList} />
    </div>
  );
};

export default ListDisplay;
