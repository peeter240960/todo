"use client";
import Content from "./todo.content";
import { mocks } from "../common/mock";
import { useEffect } from "react";

export default function TodoContainer() {
  /** Hook section */

  useEffect(() => {}, []);

  /** Functionality section */
  
  return <Content todo={mocks.todos} />;
}
