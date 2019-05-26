import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { Person } from '../models/person.model'; 
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person: Person;
  @Output() personUpdated = new EventEmitter<Person>();

  private _editForm: FormGroup;
  private _isEditMode = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this._editForm = this.fb.group({
      name: this.person.name,
      age: this.person.age,
      avatarUrl: this.person.avatarUrl
    })
  }

  onEdit(): void {
    this._isEditMode = true;
  }

  protected onSubmit(): void {
    this.person = this._editForm.value;
    this.personUpdated.emit(this.person);
    this._isEditMode = false;
  }

  get editForm(): FormGroup { return this._editForm; }
  get isEditMode(): boolean { return this._isEditMode; }
}