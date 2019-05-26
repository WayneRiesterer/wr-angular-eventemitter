import { Component, OnInit } from '@angular/core';

import { PeopleService } from './people.service';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  private _people: Array<Person>;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this._people = this.peopleService.getPeople();
  }

  onPersonUpdated(person: Person): void {
    this.peopleService.updatePerson(person);
  }

  get people(): Array<Person> { return this._people; }
}