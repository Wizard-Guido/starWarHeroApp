import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'https://swapi.dev/api/people?page='; 

  constructor(
    private http: HttpClient,
  ) { }


  getHeroes(pageNum: number = 1): Observable<any> {
    return this.http.get<any>(this.heroesUrl+pageNum)
  }

  getHero(id: number): Observable<any> {
    return this.http.get<any>('https://swapi.dev/api/people/'+id)
  }
}
