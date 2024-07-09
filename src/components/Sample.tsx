import React, { useState } from "react";

const Node = ({ value, next }: any) => (
  <div>
    <p>{value}----</p>
    {next && <><Node value={next.value} next={next.next} />uu</>}
  </div>
);

const LinkedListComponent = () => {
  const [head, setHead] = useState<any>(null);

  const addNode = (value: any) => {
    const newNode = { value, next: head };
    setHead(newNode);
  };

  return (
    <div>
      <h2>Linked List</h2>
      <button onClick={() => addNode(Math.floor(Math.random() * 100))}>
        Add Node
      </button>
      {head && <Node value={head.value} next={head.next} />}
    </div>
  );
};

export default LinkedListComponent;
