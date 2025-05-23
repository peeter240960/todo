import React, { useEffect, useRef, useState } from "react";
import { TodoContentProps } from "./todo.types";
import { ITodo, TodoType } from "../common/types";

function TodoItem({
  onClick,
  types,
  ...item
}: ITodo & { onClick: (item: ITodo) => void; types: "A" | "B" }) {
  return (
    <button
      key={item.name}
      onClick={() => onClick(item)}
      className="w-full text-center p-4 border border-gray-200 rounded hover:bg-gray-100 transition-colors"
    >
      {item.name}
    </button>
  );
}

function TodoContent(props: TodoContentProps) {
  const todoTimeRef = useRef(new Map<string, NodeJS.Timeout>());
  const [items, setItems] = useState(
    props.todo.map((t) => ({ ...t, grouped: false }))
  );

  useEffect(() => {
    return () => {
      todoTimeRef.current.forEach((timeout) => clearTimeout(timeout));
      todoTimeRef.current.clear();
    };
  }, []);

  const moveToUngrouped = (item: ITodo, skipTimer = false) => {
    const move = () =>
      setItems((prevs) => {
        const res = prevs.filter((prev) => prev.name !== item.name);
        res.push({ ...item, grouped: false });
        return res;
      });

    clearTimeout(todoTimeRef.current.get(item.name));

    if (skipTimer) {
      move();
    } else {
      const timeRef = setTimeout(move, 5000);
      todoTimeRef.current.set(item.name, timeRef);
    }
  };

  const moveToGrouped = (item: ITodo) => {
    setItems((prevs) =>
      prevs.map((prev) =>
        prev.name === item.name ? { ...prev, grouped: true } : prev
      )
    );
    moveToUngrouped(item);
  };

  const immediatelyMoveToUngrouped = (item: ITodo) => {
    moveToUngrouped(item, true);
  };

  return (
    <div className="flex justify-between gap-5 p-5">
      <div className="flex-1 p-4">
        <div className="space-y-2">
          {items.map((item) =>
            item.grouped === false ? (
              <TodoItem
                types="A"
                key={item.name}
                onClick={moveToGrouped}
                {...item}
              />
            ) : (
              <React.Fragment key={item.name}></React.Fragment>
            )
          )}
        </div>
      </div>

      {Object.entries(TodoType).map(([val, key]) => (
        <div className="flex-1 p-4" key={key}>
          <div className=" bg-neutral-100 text-center py-3 border border-gray-200 border-b-0">
            <b>{val}</b>
          </div>
          <div className="space-y-4 p-4 border border-gray-200 h-full">
            {items.map((item) =>
              item.type === key && item.grouped ? (
                <TodoItem
                  types="B"
                  key={item.name}
                  onClick={immediatelyMoveToUngrouped}
                  {...item}
                />
              ) : (
                <React.Fragment key={item.name}></React.Fragment>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoContent;
