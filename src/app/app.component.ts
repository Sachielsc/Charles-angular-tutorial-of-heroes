import { Component, OnInit } from '@angular/core';
import { Hero } from './hero/hero';
import { HeroService } from './hero/hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    // '../styles.css'
  ],
  providers: [HeroService]
  }
)

export class AppComponent implements OnInit  {
  title = 'Tour of Heroes';
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
