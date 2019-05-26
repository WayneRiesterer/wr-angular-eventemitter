import { Injectable } from '@angular/core';

import { Person } from '../models/person.model';

const LOREM_PIXEL_URL = 'https://lorempixel.com/400/200/people/';

@Injectable()
export class PeopleService {
  private _people: Array<Person> = [
    new Person('Neo', 21, LOREM_PIXEL_URL),
    new Person('Morpheus', 22, LOREM_PIXEL_URL),
    new Person('Trinity', 21, LOREM_PIXEL_URL)
  ];

  getPeople(): Array<Person> { return this._people; }

  updatePerson(person: Person) {
    this._people[person.id] = person;
  }
}