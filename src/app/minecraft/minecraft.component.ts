import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Minecraft } from '../minecraft/minecraft';

@Component({
    selector: 'minecraft',
    templateUrl: './minecraft.component.html',
    styleUrls: ['./minecraft.component.css']
})
export class MinecraftComponent implements OnInit {
    ngOnInit(): void {}
    score = [1,2,3,4,5,6,7,8,9,10]
    model = new Minecraft(1,this.score[10]);
    submitted = false;
    onSubmit() {this.submitted = true;}
    newMinecraft() {
        this.model = new Minecraft(1,0);
      }
    minecraft = {
        title: 'Minecraft',
        subtitle: 'Sandbox',
        content: 'Minecraft is a 3D survival sandbox game developed and published by Mojang, spanning multiple platforms. It was originally created by the independent video game designer Markus Persson in 2009, before giving the development to Jens Bergensten in 2011. The game has no specific goals to accomplish, allowing players a large amount of freedom in choosing how to play the game.'
    }
}