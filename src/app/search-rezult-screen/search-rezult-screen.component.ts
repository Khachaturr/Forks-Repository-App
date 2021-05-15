import { RequestService } from './../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentRoute, selectQueryParam } from '../reducers/selector';




// interface User {
//   fullNameRepo: string;
//   owner: string;
//   urlRepo: string
// }




@Component({
  selector: 'app-search-rezult-screen',
  templateUrl: './search-rezult-screen.component.html',
  styleUrls: ['./search-rezult-screen.component.css']
})


export class SearchResultScreenComponent implements OnInit {
  usersHaveForks = []
 
  page: number = 1;

  page$ = this.store.select(selectQueryParam('page')).subscribe(date => this.page = +date);
  request$ = this.store.select(selectCurrentRoute).subscribe((data) => {
    this.requestService.getRequestInGitHum(data.params.owner, data.params.repo, data.queryParams.page)
      .subscribe((data) => { this.usersHaveForks=[]; this.usersHaveForks.push(data)  })
  })

  constructor(private route: Router, private activatedRoute: ActivatedRoute,
    private store: Store, private requestService: RequestService) {

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





  ngOnInit(): void {

  }

}
