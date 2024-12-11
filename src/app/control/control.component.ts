import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Control } from '../control/control';

@Component({
    selector: 'control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
    ngOnInit(): void {}
    score = [1,2,3,4,5,6,7,8,9,10]
    model = new Control(1,this.score[10]);
    submitted = false;
    onSubmit() {this.submitted = true;}
    newMinecraft() {
        this.model = new Control(1,0);
      }
    control = {
        title: 'Control',
        subtitle: 'Action',
        content: 'Control is played from a third-person perspective. Control is set within the Oldest House, a featureless Brutalist skyscraper in New York City, and the headquarters of the fictional Federal Bureau of Control (FBC), which studies Altered World Events (AWEs) and collects and studies Objects of Power from these AWEs. The Oldest House, itself an Object of Power, has an interior far larger than its exterior; an enormous, constantly shifting supernatural realm that defies the laws of spacetime.'
    }
}