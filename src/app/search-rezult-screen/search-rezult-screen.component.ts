import { RequestService, Repo } from '../searchRezultScreen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentRoute, selectQueryParam } from '../reducers/selector';
import { Subject } from 'rxjs';




@Component({
  selector: 'app-search-rezult-screen',
  templateUrl: './search-rezult-screen.component.html',
  styleUrls: ['./search-rezult-screen.component.css']
})


export class SearchResultScreenComponent implements OnInit, OnDestroy {
  repoHaveForks: Repo[] = [];
  currentRate: number;
  page: number = 1;
  isShowrepoInformationSection: boolean = false

  private ngUnsubscribe = new Subject()

  page$ = this.store.select(selectQueryParam('page')).subscribe(date => this.page = +date);
  request$ = this.store.select(selectCurrentRoute).subscribe((data) => {
    this.searchRezultScreenService.sendRequestToGitHum(data.params.owner, data.params.repo, data.queryParams.page)
      .subscribe((data) => { this.repoHaveForks = []; this.createRepoArray(data); this.isShowrepoInformationSection = true },
        (error) => { alert('Nothing was found with the information you provided'); this.isShowrepoInformationSection = false })
  })


  createRepoArray(fullRepoDataArr): void {
    for (let repoObj of fullRepoDataArr) {

      let repozitaria: Repo = {
        fullNameRepo: '',
        owner: '',
        urlRepo: '',
        favorit: NaN
      }
      repozitaria.fullNameRepo = repoObj.full_name;
      repozitaria.owner = repoObj.owner.login;
      repozitaria.urlRepo = repoObj.forks_url;
      repozitaria.favorit = this.searchRezultScreenService.checkFavoritOrNot(repoObj.forks_url)
      this.repoHaveForks.push(repozitaria);
    }

  }



  constructor(private route: Router, private activatedRoute: ActivatedRoute,
    private store: Store, private searchRezultScreenService: RequestService,) {

  }

  addParaminUrl() {
    this.route.navigate([],
      {
        relativeTo: this.activatedRoute,
        queryParams: { page: this.page },
        queryParamsHandling: 'merge'
      }
    )
  }


  seveFavoritRepo(repo: Repo) {
    if (repo.favorit >= 0) {
      this.searchRezultScreenService.saveInLocalestorageFavorits(repo)
    }
  }


  ngOnInit(): void {

  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete()

  }

}
