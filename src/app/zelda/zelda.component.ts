import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Zelda } from '../zelda/zelda';

@Component({
    selector: 'zelda',
    templateUrl: './zelda.component.html',
    styleUrls: ['./zelda.component.css']
})
export class ZeldaComponent implements OnInit {
    ngOnInit(): void {}
    score = [1,2,3,4,5,6,7,8,9,10]
    model = new Zelda(1,this.score[10]);
    submitted = false;
    onSubmit() {this.submitted = true;}
    newMinecraft() {
        this.model = new Zelda(1,0);
      }
    zelda = {
        title: 'Legend of Zelda: Ocarina of Time',
        subtitle: 'RPG',
        content: 'The Legend of Zelda: Ocarina of Time is a fantasy action-adventure game set in an expansive environment. The player controls series protagonist Link from a third-person perspective in a three-dimensional world. Link primarily fights with a sword and shield but can also use other weapons such as projectiles, bombs, and magic spells.'
    }
}