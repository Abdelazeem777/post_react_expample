class HomeRepository {
    constructor(homeRemoteDataSource) {
        this.homeRemoteDataSource = homeRemoteDataSource;
    }

    loadPosts() {
        return this.homeRemoteDataSource.getPosts();
    }

    loadPostByUserId(userId) {
        return this.homeRemoteDataSource.getPostByUserId(userId);
    }
}

export default HomeRepository;