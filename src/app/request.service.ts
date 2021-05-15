import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RequestService {
 

  constructor(private HttpClient:HttpClient, ) { }


  getRequestInGitHum(owner,repo,page){
  return  this.HttpClient.get(`https://api.github.com/repos/${owner}/${repo}/forks?page=${page}&per_page=10`)
  }
}
