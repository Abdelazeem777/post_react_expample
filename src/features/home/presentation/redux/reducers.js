export default function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        isLoading: true,
        posts: [...(state.posts ?? [])],
      };
    case "loaded":
        console.log(action.payload);
      return {
        isLoading: false,
        posts: [...state.posts, ...action.payload],
      };
    case "error":
      return {
        isLoading: false,
        error: action.payload,
      };
    case "loadingMore":
      return {
        isLoading: true,
        posts: [...state.posts],
      };
    default:
      return state;
  }
}
