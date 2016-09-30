//Angular Dependencies
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms';
import {routing}         from './app.routing';
import {HttpModule}      from '@angular/http';
// import { ContextMenuService } from 'angular2-contextmenu';
import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//Main entry point
import { AppComponent }  from './app.component';

//HeroesComponent
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {HeroSearchComponent} from './hero-search.component';

//Todo: This didnt work. Come back.
//ContextMenuComponent
import {MyContextMenuComponent} from  './context-menu/context-menu.component';

//DashboardComponent
import {DashboardComponent} from './dashboard.component';

@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             HttpModule,
             InMemoryWebApiModule.forRoot(InMemoryDataService), 
             routing],
  declarations: [ AppComponent,
                  DashboardComponent,
                  HeroDetailComponent,
                  HeroesComponent,
                  HeroSearchComponent,
                  MyContextMenuComponent 
                  ],
  providers: [
     HeroService 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
