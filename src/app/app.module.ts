import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AllHeroesComponent } from './all-heroes/all-heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';

const routes: Routes = [
  { path: '', component: HeroListComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: AllHeroesComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeroListComponent,
    HeroDetailComponent,
    AllHeroesComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
