import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    home = {
      title: 'Get Ranking.',
      content: 'Welcome to GameRanker! Feel free to rank any game in the database!',
      image: './app/home/gamebackground.jpg'
    };
  
    constructor() { }
  
    ngOnInit() { }
  }