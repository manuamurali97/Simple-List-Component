import { useState } from "react";


function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1); // State to track selected index

  return (
    <>
      <h1>List Element</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className= {selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => {setSelectedIndex(index);}} // This onClick won't cause a re-render
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
