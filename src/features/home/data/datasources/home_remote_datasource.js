import ApiEndPoint from "../../../../api_end_points";

class HomeRemoteDataSource {
    constructor(networkService) {
        this.networkService = networkService;
    }

    getPosts() {
        const url = ApiEndPoint.GET_POSTS;
        return this.networkService.get(url).then((response) => {
            if (response.status !== 200) console.log("error");

            return response.data;
        });
    }

    getPostByUserId(userId) {
        const url = ApiEndPoint.GET_POSTS;
        return this.networkService
            .get(url, { userId: userId })
            .then((response) => response.data);
    }
}

export default HomeRemoteDataSource;