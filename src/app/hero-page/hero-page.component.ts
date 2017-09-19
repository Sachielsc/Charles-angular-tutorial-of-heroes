import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'hero-page',
  templateUrl: './hero-page.component.html',
  providers: [HeroService]
  }
)

export class HeroPageComponent implements OnInit  {
  selectedHeroFromList: Hero;
  heroes : Hero[];

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHeroFromList = hero;
  };

  ngOnInit(): void {
    this.heroService.getHeroes().then(response => this.heroes = response);
  }
}
