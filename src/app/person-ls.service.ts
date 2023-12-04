import { Injectable } from '@angular/core';
import {Person} from "./person";

@Injectable({
  providedIn: 'root'
})
export class PersonLsService {
  readonly KEY = 'stored-people-data';
  constructor() { }

  public getAll(): Person[] {
    let people: Person[] = [];
    let data = localStorage.getItem(this.KEY);
    if (data) {
      people = JSON.parse(data) || [];
    }
    return people;
  }

  public getPerson(index: number): Person {
    // get all people and return the one at [index] position
    const people = this.getAll();
    return people[index];
  }

  public addPerson(person: Person): void {
    let people = this.getAll();
    people.push(person);
    localStorage.setItem(this.KEY, JSON.stringify(people));
  }

  public deletePerson(index: number): void {
    let people = this.getAll();
    people.splice(index, 1);
    localStorage.setItem(this.KEY, JSON.stringify(people));
  }
}
