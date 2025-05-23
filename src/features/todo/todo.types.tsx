import { ITodo } from "../common/types";

export interface TodoContentProps {
  todo: ITodo[];
}
export interface TodoGroup extends ITodo {
  grouped: boolean;
}
