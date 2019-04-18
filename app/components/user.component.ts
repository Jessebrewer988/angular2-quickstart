import {Component} from '@angular/core';

@Component({
  selector: 'user',
  template: `
      <div style="padding:5px;margin:1em;">
        <h2 style="color:aquamarine;">{{name}}</h2>
        <p>Email: {{email}}</p>
        <p>Address: {{address.street}}</p>
        <p style="margin-left:60px">{{address.city}}, {{address.state}}</p>

        <button (click)="toggleHobbies()">{{ showHobbies ? "Hide Hobbies" : "Show Hobbies" }}</button>
        <div *ngIf="showHobbies">
          <h3>Hobbies</h3>
          <ul>
            <li *ngFor="let hobby of hobbies; let i = index">
              {{hobby}} <button (click)="deleteHobby(i)">X</button>
            </li>
          </ul>
          <form (submit)="addHobby(hobby.value)">
            <label for="add-hobboy">Add Hobby</label> <br/>
            <input type="text" name="add-hobby" #hobby /><br />
          </form>
        </div>
        <hr />
        <h3>Edit User</h3>
        <form>
          <label for="name">Name: </label> <br/>
          <input type="text" name="name" [(ngModel)]="name"/><br />
          <label for="email">Email: </label> <br/>
          <input type="text" name="email" [(ngModel)]="email"/><br />
          <label for="address.street">Street: </label> <br/>
          <input type="text" name="address.street" [(ngModel)]="address.street"/><br />
          <label for="address.city">City: </label> <br/>
          <input type="text" name="address.city" [(ngModel)]="address.city"/><br />
          <label for="address.state">State: </label> <br/>
          <input type="text" name="address.state" [(ngModel)]="address.state"/><br />
        </form>
      </div>
  `,
})

export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    console.log('User Component Constructor Called');
    this.name = "Jesse"
    this.email = "email@email.com";
    this.address = {
      street: '123 Main St.',
      city: 'Chicago',
      state: 'IL'
      }
    this.hobbies = ['Games', 'Kickboxing', 'Sleeping']
    this.showHobbies = false;
  }

  toggleHobbies() {
    this.showHobbies ? this.showHobbies = false : this.showHobbies = true;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }

}

interface address {
  street: string;
  city: string:
  state: string;
}