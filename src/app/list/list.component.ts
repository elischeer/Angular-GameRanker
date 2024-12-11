import { Component } from '@angular/core';

export interface PeriodicElement {
    game: string;
    position: number;
    score: number;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, game: 'Minecraft', score: 9.7},
    {position: 2, game: 'Legend of Zelda: Ocarina of Time', score: 9.1},
    {position: 3, game: 'Counter Strike: Global Offensive', score: 8.3},
    {position: 4, game: 'Control', score: 7.8},
  ];
  
@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    displayedColumns: string[] = ['demo-position', 'demo-game', 'demo-score'];
    dataSource = ELEMENT_DATA;
}