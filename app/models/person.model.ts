export class Person {
  private _id: number;
  private _name: string;
  private _age: number;
  private _avatarUrl: string;

  constructor(name: string, age: number, avatarUrl: string) {
    this._id = Math.floor(Math.random() * 10000);
    this._name = name;
    this._age = age;
    this._avatarUrl = avatarUrl;
  }

  get id(): number { return this._id; }

  get name(): string { return this._name; }
  set name(name: string) { this._name = name; }

  get age(): number { return this._age; }
  set age(age: number) { this._age = age; }

  get avatarUrl(): string { return this._avatarUrl; }
}