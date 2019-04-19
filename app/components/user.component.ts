import {Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html'
})

export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  showEdit: boolean;


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

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i: number) {
    this.hobbies.splice(i, 1);
  }

  toggleEdit() {
    this.showEdit ? this.showEdit = false : this.showEdit = true;
  }

}

interface address {
  street: string;
  city: string;
  state: string;
}

