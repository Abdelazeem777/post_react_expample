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
  },[]);

 var userId=0;

  return (
    <div>
      <h1>Home Posts</h1>
      <input type="text" placeholder="user id" onChange={(e)=>userId=e.target.value}/>
      <br/>
      <br/>
      <button onClick={() =>{
          dispatch({ type: "loading" });
          Injector.loadPostsByUserIdUsecase()
          .execute(userId)
          .then((result) => {
            dispatch({
              type: "loaded",
              payload: result ,
            });
          })
          .catch((err) => {
            dispatch({ type: "error", payload:  err  });
          });
    }}>Load post</button>
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        state.posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}
