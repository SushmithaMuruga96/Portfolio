import React from "react";
import { useState } from "react";
import "./App.css";

const todolist = [
  { name: "Gym at 7:00", read: false },
  { name: "Prepare Dinner", read: false },
  { name: "Task of the Day", read: false },
];

const MytoDoListAPP = () => {
  const [mytodo, setMytodo] = useState(todolist);
  const [value, setvalue] = useState("");

  const onhandleClick = () => {
    const addMoreList = {
      name: value,
    };
    setMytodo([...mytodo, addMoreList]);
    setvalue('')
  };

  const onhandleDelete = (name) => {
    const updatedListAfterRemove = mytodo.filter((x) => x.name !== name);

    setMytodo(updatedListAfterRemove);
  };
  const onhandleMarkAsRead = (name) => {
    const listupdated = mytodo.map((x) => {
      if (name === x.name) {
        return { ...x, read: true };
      } else {
        return x;
      }
    });

    setMytodo(listupdated);
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "30%",
          color:'green'
        }}
      >
        <h2>TodoList</h2>
        {mytodo?.map((x) => (
          <ul
            style={{
              display: "flex",
            }}
          >
            <li
              style={{
                padding: "5px",
                margin: "5px",
                width: "120px",
                color:x.read ? 'red':'green'
              }}
            >
              {x.name}
            </li>
            <button
              style={{
                padding: "2px",
                margin: "5px",
                width: "120px",
              }}
              onClick={() => {
                onhandleDelete(x.name);
              }}
            >
              {" "}
              Delete
            </button>
            <button
              style={{
                padding: "3px",
                margin: "5px",
                width: "120px",
              }}
              onClick={() => {
                onhandleMarkAsRead(x.name);
              }}
            >
              {" "}
              Mark as Read
            </button>
          </ul>
        ))}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            style={{ margin: "3px" }}
            type="text"
            value={value}
            onChange={(e) => {
              setvalue(e.target.value);
            }}
          ></input>
          <button style={{ margin: "3px" }} onClick={onhandleClick}>
            Add
          </button>
        </div>
      </div>

      {/* <div class="block">Display: Block</div>

      <div class="inline">Display: Inline4567890</div>
      <div class="inline">Another Inline Element</div>

      <div class="inline-block">Display: Inline-Block</div>
      <div class="inline-block">Another Inline-Block Element</div>

      <div class="flex-container">
        <div>Flex Item 1</div>
        <div>Flex Item 2</div>
        <div>Flex Item 3</div>
      </div>

      <div class="grid-container">
        <div>Grid Item 1</div>
        <div>Grid Item 2</div>
        <div>Grid Item 3</div>
        <div>Grid Item 4</div>
      </div>

      <div class="table">
        <div class="table-row">
          <div class="table-cell">Table Cell 1</div>
          <div class="table-cell">Table Cell 2</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Table Cell 3</div>
          <div class="table-cell">Table Cell 4</div>
        </div>
      </div> */}
    </>
  );
};

export default MytoDoListAPP;
