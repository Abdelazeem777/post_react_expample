class LoadPostsByUserIdUsecase {
    constructor(homeRepository) {
        this.homeRepository = homeRepository;
    }

    execute(userId) {
        return this.homeRepository.loadPostByUserId(userId);
    }
}

export default LoadPostsByUserIdUsecase;