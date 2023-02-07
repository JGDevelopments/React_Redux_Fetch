import { ADD_TODO } from "../actions/actionTypes";
import { REMOVE_TODO } from "../actions/actionTypes";

const initialState = [];

export const todos = (state = initialState, { type, todo }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, todo];
    case REMOVE_TODO:
      return state.filter(({ id }) => id !== todo.id);
    default:
      return state;
  }
};
