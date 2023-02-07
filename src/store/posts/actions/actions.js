import {
  FETCH_POSTS_STARTED,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./actionTypes";
import { Posts } from "../model/model";

export const fetchPostsStarted = () => {
  return { type: FETCH_POSTS_STARTED };
};

export const fetchPostsSuccess = (posts) => {
  return { type: FETCH_POSTS_SUCCESS, posts };
};

export const fetchPostsFailure = () => {
  return { type: FETCH_POSTS_FAILURE };
};

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsStarted());
    return fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((posts) => posts.map((post) => new Posts(post)))
      .then((posts) => dispatch(fetchPostsSuccess(posts))(console.log(posts)))
      .catch(() => fetchPostsFailure());
  };
};
