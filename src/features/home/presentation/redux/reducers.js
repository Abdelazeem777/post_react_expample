export default function reducer(state, action) {
    switch (action.type) {
        case "loading":
            return {
                isLoading: true,
                posts: [],
            };
        case "loaded":
            return {
                isLoading: false,
                posts: [...action.payload],
            };
        case "error":
            return {
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}