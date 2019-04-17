import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    hero: Hero = {
        id: 1,
        name: 'Jorge el Botes',
        ability: 'Fast falling'
    };

    heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
