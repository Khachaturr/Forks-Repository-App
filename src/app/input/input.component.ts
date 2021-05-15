import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentRoute, selectQueryParam } from '../reducers/selector';




@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit, OnDestroy {
  inputValue: string;
  inputValidorNot: boolean = true;

  urlParam$ = this.store.select(selectCurrentRoute).subscribe(
    (data) => {
      if (data.params.owner != undefined && data.params.repo != undefined) {
        this.inputValue = data.params.owner + '/' + data.params.repo
      }
    })



  constructor(private router: Router, private store: Store) { }

  checkInputValue(): void {
    let regExpForInputTest = new RegExp('[a-z+]+/+[a-z]', 'g');
    let result = regExpForInputTest.test(this.inputValue);
    this.inputValidorNot = result
  }

  repoSearch(): void {
    this.checkInputValue()
    if (this.inputValidorNot === true) {
      this.router.navigate([`./searchResultScreen/${this.inputValue}`], {
        queryParams: { page: 1, per_page: 10 },
        queryParamsHandling: 'merge'
      })
    }

  }



  ngOnInit(): void {

  }
  ngOnDestroy(){
    this.urlParam$.unsubscribe()
  }

}