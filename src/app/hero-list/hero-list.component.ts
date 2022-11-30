import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
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