import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CSGO } from '../cs-go/cs-go';

@Component({
    selector: 'cs-go',
    templateUrl: './cs-go.component.html',
    styleUrls: ['./cs-go.component.css']
})
export class CSGOComponent implements OnInit {
    ngOnInit(): void {}
    score = [1,2,3,4,5,6,7,8,9,10]
    model = new CSGO(1,this.score[10]);
    submitted = false;
    onSubmit() {this.submitted = true;}
    newMinecraft() {
        this.model = new CSGO(1,0);
      }
    csgo = {
        title: 'Counter Strike: Global Offensive',
        subtitle: 'Tactical Shooter',
        content: 'Global Offensive, like prior games in the Counter-Strike series, is an objective-based, multiplayer first-person shooter. Two opposing teams, the Terrorists and the Counter-Terrorists, compete in game modes to repeatedly complete objectives, such as securing a location to plant or defuse a bomb and rescuing or capturing hostages. At the end of each short round, players are rewarded based on individual and team performance with in-game currency to spend on other weapons or utility in subsequent rounds.'
    }
}