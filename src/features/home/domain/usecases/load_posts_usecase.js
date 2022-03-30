class LoadPostsUsecase {
  constructor(homeRepository) {
    this.homeRepository = homeRepository;
  }

   execute(page=0) {
    return this.homeRepository.loadPosts(page);
  }
}


export default LoadPostsUsecase;