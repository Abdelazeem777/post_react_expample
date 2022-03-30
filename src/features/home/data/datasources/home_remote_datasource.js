import ApiEndPoint from "../../../../api_end_points";

class HomeRemoteDataSource {
    constructor(networkService) {
        this.networkService = networkService;
    }

    loadPosts(page) {
        const url = ApiEndPoint.GET_POSTS;
        return this.networkService.get(url, { params: { page: page } });
    }
}


export default HomeRemoteDataSource;