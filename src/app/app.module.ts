import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MinecraftComponent } from './minecraft/minecraft.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZeldaComponent } from './zelda/zelda.component';
import { ControlComponent } from './control/control.component';
import { CSGOComponent } from './cs-go/cs-go.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { ListComponent } from './list/list.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MinecraftComponent,
    ZeldaComponent,
    ControlComponent,
    CSGOComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
