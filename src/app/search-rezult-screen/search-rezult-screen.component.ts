import { RequestService, User } from '../searchRezultScreen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentRoute, selectQueryParam } from '../reducers/selector';




@Component({
  selector: 'app-search-rezult-screen',
  templateUrl: './search-rezult-screen.component.html',
  styleUrls: ['./search-rezult-screen.component.css']
})


export class SearchResultScreenComponent implements OnInit {
  usersHaveForks:User[] = [];
  
  currentRate:number;
 
  page: number = 1;

  page$ = this.store.select(selectQueryParam('page')).subscribe(date => this.page = +date);
  request$ = this.store.select(selectCurrentRoute).subscribe((data) => {
    this.searchRezultScreenService.getRequestInGitHum(data.params.owner, data.params.repo, data.queryParams.page)
      .subscribe((data) => { this.usersHaveForks=[]; this.createUserArray(data);  })
  })


  createUserArray(fullUserDataArr):void{
    for(let userObj of fullUserDataArr ){
      // console.log(userObj)
      let user:User={
        fullNameRepo:'',
        owner: '',
        urlRepo:'',
        favorit: 0
      }
      user.fullNameRepo=userObj.full_name;
      user.owner=userObj.owner.login;
      user.urlRepo=userObj.forks_url;
      this.usersHaveForks.push(user);
    }
    // console.log(this.usersHaveForks)
  }

  constructor(private route: Router, private activatedRoute: ActivatedRoute,
    private store: Store, private searchRezultScreenService: RequestService, ) {

  }

  addPageinUrl() {
    console.log(this.usersHaveForks)

    this.route.navigate([],
      {
        relativeTo: this.activatedRoute,
        queryParams: { page: this.page },
        queryParamsHandling: 'merge'
      }
    )
  }
seveFavoritRepo(repo){
this.searchRezultScreenService.saveInLocalestorageFavorits(repo)
}



  ngOnInit(): void {

  }

}
