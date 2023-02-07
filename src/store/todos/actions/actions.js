import { ADD_TODO, REMOVE_TODO } from "./actionTypes";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo, //im treating this like a payload for now
  };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo,
  };
};
