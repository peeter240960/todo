export const TodoType = {
  Fruit: "Fruit",
  Vegetable: "Vegetable",
} as const
export interface ITodo {
  type: keyof typeof TodoType;
  name: string;
}
