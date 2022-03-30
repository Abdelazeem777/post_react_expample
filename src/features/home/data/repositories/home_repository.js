class HomeRepository {
    constructor(homeRemoteDataSource) {
        this.homeRemoteDataSource = homeRemoteDataSource;
    }

    loadPosts(page) {
        return this.homeRemoteDataSource.loadPosts(page);
    }

}


export default HomeRepository;