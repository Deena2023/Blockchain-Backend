import { storeTodo } from "../helpers/helper.js";
export const storeTododataService = (todo: ToDo): ToDo => {
  // store todo task on blockchain
  console.log(todo+"<=======")
  storeTodo(todo).catch(console.error);

  // Return weather data
  return todo;
};
