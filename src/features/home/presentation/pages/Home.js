import { useEffect, useReducer } from "react";
import Injector from "../../../../di/injector";
import reducer from "../redux/reducers";
import PostCard from "../components/post_card";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { isLoading: true, posts: [] });

  useEffect(() => {
    dispatch({ type: "loading" });
    Injector.loadPostsUsecase()
      .execute()
      .then((result) => {
        dispatch({
          type: "loaded",
          payload: result ,
        });
      })
      .catch((err) => {
        dispatch({ type: "error", payload:  err  });
      });
  });

  return (
    <div>
      <h1>Home</h1>
      <p>The new posts.</p>
      <button /* onClick={() => dispatch()} */>Load Posts</button>
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        state.posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}
