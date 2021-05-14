import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {
  inputValue: string;
  inputValidorNor:boolean=true;


  constructor(private router: Router) { }

  checkingInputValue():void{
    let inputregExp=new RegExp('[a-z+]+/+[a-z]', 'g');
    let result = inputregExp.test(this.inputValue);
     this.inputValidorNor=result
  }

  repoSearch(): void {   
    this.checkingInputValue()
    if(this.inputValidorNor===true){
      this.router.navigate([`./searchResultScreen/${this.inputValue}`], {
        queryParams: { repo: 5, page: 1 },
        queryParamsHandling: 'merge'
      })
    }

  }

  

  ngOnInit(): void {

  }

}