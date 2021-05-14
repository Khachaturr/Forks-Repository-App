import { Component, OnInit } from '@angular/core';



interface User {
  fullNameRepo: string;
  owner: string;
  urlRepo:string
}

const users: User[] = [
 
];


@Component({
  selector: 'app-search-rezult-screen',
  templateUrl: './search-rezult-screen.component.html',
  styleUrls: ['./search-rezult-screen.component.css']
})


export class SearchResultScreenComponent implements OnInit {
  usersHaveForks:User[] = users;
  page:number=1;
  constructor() { 
    
  }
  

  ngOnInit(): void {
    
  }

}
