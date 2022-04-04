class LoadPostsUsecase {
    constructor(homeRepository) {
        this.homeRepository = homeRepository;
    }

    execute() {
        return this.homeRepository.loadPosts();
    }
}

export default LoadPostsUsecase;