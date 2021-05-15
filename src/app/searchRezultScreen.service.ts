import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  fullNameRepo: string;
  owner: string;
  urlRepo: string
  favorit:number
}


@Injectable({
  providedIn: 'root'
})
export class RequestService {
 

  constructor(private HttpClient:HttpClient, ) { }


  getRequestInGitHum(owner,repo,page){
  return  this.HttpClient.get(`https://api.github.com/repos/${owner}/${repo}/forks?page=${page}&per_page=10`)
  }
  
  getLocalStorageFavRepoArr():Array<any>{
    let favoritForksrepoString= localStorage.getItem('favoritForksrepo')
    const favoritForksrepoArr:[]=JSON.parse(favoritForksrepoString)
    console.log(favoritForksrepoArr)
    if(favoritForksrepoArr){
      return favoritForksrepoArr
    }else return []
 
   }
 
 saveInLocalestorageFavorits(event:User){  
   let favoritRepoArray:Array<any>=[...this.getLocalStorageFavRepoArr()];
   console.log(typeof(favoritRepoArray))
   favoritRepoArray.push(event)
   localStorage.setItem('favoritForksrepo', JSON.stringify(favoritRepoArray))
 }


}
