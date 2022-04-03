import LoadPostsUsecase from "../features/home/domain/usecases/load_posts_usecase";
import HomeRepository from "../features/home/data/repositories/home_repository";
import HomeRemoteDataSource from "../features/home/data/datasources/home_remote_datasource";
import NetworkService from "../core/services/network_service";

class Injector {
    constructor() {
        this.flyWeight={};
    }



  loadPostsUsecase() {
     if( this.flyWeight.loadPostsUsecase === undefined || this.flyWeight.loadPostsUsecase === null) {
      this.flyWeight.loadPostsUsecase = new LoadPostsUsecase(this.homeRepository());
    }
    return this.flyWeight.loadPostsUsecase    
  }

  homeRepository() {
    
    if( this.flyWeight.homeRepository === undefined || this.flyWeight.homeRepository === null) {
        this.flyWeight.homeRepository = new HomeRepository(this.homeRemoteDataSource());
    }
    return this.flyWeight.homeRepository
  }

  homeRemoteDataSource() {
    if( this.flyWeight.homeRemoteDataSource === undefined || this.flyWeight.homeRemoteDataSource === null) {
        this.flyWeight.homeRemoteDataSource = new HomeRemoteDataSource(this.networkService());
    }
    return this.flyWeight.homeRemoteDataSource
  }

  networkService() {
    if( this.flyWeight.networkService === undefined || this.flyWeight.networkService === null) {
        this.flyWeight.networkService = new NetworkService();
    }
    return this.flyWeight.networkService
  }
}

export default new Injector();

