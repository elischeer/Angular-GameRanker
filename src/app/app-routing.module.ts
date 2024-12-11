import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ZeldaComponent } from './zelda/zelda.component';
import { MinecraftComponent } from './minecraft/minecraft.component';
import { CSGOComponent } from './cs-go/cs-go.component';
import { ControlComponent } from './control/control.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'zelda', component: ZeldaComponent },
  { path: 'minecraft', component: MinecraftComponent },
  { path: 'csgo', component: CSGOComponent },
  { path: 'control', component: ControlComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
