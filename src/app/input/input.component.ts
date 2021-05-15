import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentRoute, selectQueryParam } from '../reducers/selector';




@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {
  inputValue: string;
  inputValidorNot: boolean = true;

  urlParam$ = this.store.select(selectCurrentRoute).subscribe(
    (data) => {
      this.inputValue = data.params.owner + '/' + data.params.repo
      // console.log(data.queryParams)
      
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

}