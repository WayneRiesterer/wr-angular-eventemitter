import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';

import { PeopleService } from './people/people.service';


@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule ],
  declarations: [ 
    AppComponent,
    PeopleComponent,
    PersonComponent, 
  ],
  bootstrap: [ AppComponent ],
  providers: [ PeopleService ]
})
export class AppModule {}
