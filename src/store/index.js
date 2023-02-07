import { addTodo, todos, removeTodo, ToDo } from "./todos";
import { posts, fetchPosts } from "./posts";
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";

const rootReducer = combineReducers({ posts, todos });

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export { addTodo, ToDo, removeTodo, fetchPosts };
