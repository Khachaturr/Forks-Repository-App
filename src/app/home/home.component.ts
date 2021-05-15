
import { Component, OnInit } from '@angular/core';
import { animat } from './animation';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    animat,
  ]
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

