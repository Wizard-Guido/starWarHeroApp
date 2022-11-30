import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.css']
})
export class AllHeroesComponent {
  pageEvent!: PageEvent;
  heroes: Hero[] = [];
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [1, 5, 10];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
      this.getHeroPage();
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex;
    this.getHeroPage();
  }

  getHeroPage(): void {
      this.heroService.getHeroes(this.pageIndex+1)
        .subscribe(heroes => {
            const list = heroes.results.map((item: any) => {
                const id: number = item.url.split('/').slice(-2)[0] * 1;
                const newItem = {...item, id: id};
                return newItem;
            })
            this.heroes = list;
        });
  }
}
