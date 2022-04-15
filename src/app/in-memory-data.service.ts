import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Tata Steel',price: 1345 },
      { id: 2, name: 'Reliance',price: 2250 },
      { id: 3, name: 'TCS',price: 3850 },
      { id: 4, name: 'Adani Power',price: 420 },
      { id: 5, name: 'HDFC',price: 1445 },
      { id: 6, name: 'Hindustan Unilever Limited',price: 2152 },
      { id: 7, name: 'Nestle',price: 18382 },
      { id: 8, name: 'Infosys',price: 1700 },
      { id: 9, name: 'ITC',price: 252 },
      { id: 10, name: 'Wipro',price: 650 }
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


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/