import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Repo {
  fullNameRepo: string;
  owner: string;
  urlRepo: string
  favorit: number
}


@Injectable({
  providedIn: 'root'
})
export class RequestService {


  constructor(private HttpClient: HttpClient,) { }


  sendRequestToGitHum(owner, repo, page) {
    return this.HttpClient.get(`https://api.github.com/repos/${owner}/${repo}/forks?page=${page}&per_page=10`)
  }


  getLocalStorageFavRepoArr(): Array<any> {
    let favoritForksrepoString = localStorage.getItem('favoritForksrepo')
    const favoritForksrepoArr: [] = JSON.parse(favoritForksrepoString)
    if (favoritForksrepoArr) {
      return favoritForksrepoArr
    } else return []

  }


  saveInLocalestorageFavorits(event: Repo) {
    let favoritRepoArray: Array<any> = [...this.getLocalStorageFavRepoArr()];
    let indexRepoObj = favoritRepoArray.findIndex(data => data.urlRepo === event.urlRepo)
    if (indexRepoObj != -1) {
      favoritRepoArray[indexRepoObj].favorit = event.favorit
    } else {
      favoritRepoArray.push(event)
    }

    localStorage.setItem('favoritForksrepo', JSON.stringify(favoritRepoArray))
  }


  checkFavoritOrNot(forksUrl: string): number {
    let favRepo = this.getLocalStorageFavRepoArr()
    for (let repoUrl of favRepo) {
      if (repoUrl.urlRepo === forksUrl) {
        return repoUrl.favorit
      }
    }
  }


}
