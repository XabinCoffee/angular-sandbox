import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 1, name: 'Jorge el botes', ability: 'Increasing gravity only for himself, falling at greater speeds' },
        { id: 2, name: 'Perico el chatarras', ability: 'Ability to collect many useless trinkets at immeasurable speeds' },
        { id: 3, name: 'Ikusizgozatu', ability: 'Engineering cost-effective and eco-friendly grafic cards' },
        { id: 4, name: 'The Modeler', ability: 'The ability to synchronize 3D renders with reality, can reshape reality by using Blender' },
        { id: 5, name: 'Indie Man', ability: 'He can easily discern entertainment products developed by less than 3 people' },
        { id: 6, name: 'El Logitecho', ability: 'Synchronize any Logitech G801 ORION keyboard with Spain\'s anthem' },
        { id: 7, name: 'Begeta (EiTB edition)', ability: 'He has the ability to speak perfekt hika and never mistakes toka and noka' },
        { id: 8, name: 'Poltergeist', ability: 'He can join any VoIP application and use his cacophonies to distort reality and scare users.' },
        { id: 9, name: 'Tarthamud', ability: 'He is able to speak at a rate of 20 words per second, and can only be understood by fellow Tarthamuds. Tarthamuds were used as communication devices during WW2 to send encrypted messages' },
        { id: 10, name: 'Xan Who', ability: 'No special abilities, but his name is too funny to ignore' },
        { id: 11, name: 'Peru Abarka', ability: 'His signature ability Time Distortion allows him to exist outside of our current timeline. Precisely, his body exists in the current time, but his spirit habits the Atapuerk' },
        { id: 12, name: 'Notre Damn', ability: 'It burns faster than any other building. Can resist one lethal blow from Euskal Talde Su Ta Gar, but not two' },
        { id: 13, name: 'Mr. Nice', ability: '' },
        { id: 14, name: 'Narco', ability: '' },
        { id: 15, name: 'Bombasto', ability: '' },
        { id: 16, name: 'Celeritas', ability: '' },
        { id: 17, name: 'Magneta', ability: '' },
        { id: 18, name: 'RubberMan', ability: '' },
        { id: 19, name: 'Dynama', ability: '' },
        { id: 20, name: 'Dr IQ', ability: '' },
        { id: 21, name: 'Magma', ability: '' },
        { id: 22, name: 'Tornado', ability: '' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}