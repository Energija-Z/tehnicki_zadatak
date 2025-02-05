import { NgIf } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, Output, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  imports: [NgIf, FormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {

  @ViewChild(".column")
  column!: ElementRef;

  password_confirm!: string;
  password!: string;

  username!: string;
  name!: string;
  surname!: string;
  email!: string;
  phone_number!: string;
  role!: string;
  workplace!: string;
  address!: string;
  country!: string;
  city!: string;

  submit(): void {
    if(this.password !== this.password_confirm)
      alert("Passwords do not match.");

    else {
      alert("Data saved");
      console.log(this.username);
      const table = document.querySelector("tbody");
      table?.insertAdjacentHTML("beforeend", `
        <tr>
              <td>[]</td>
              <td>` + this.name + `</td>
              <td>` + this.surname + `</td>
              <td>` + this.email + `</td>
              <td>` + this.phone_number + `</td>
              <td>` + this.role + `</td>
              <td>` + this.workplace + `</td>
              <td>` + this.country + `</td>
              <td>` + this.city + `</td>
          </tr>
      `)
    }
  }

  isOpen: boolean = true;

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.closeModal.emit(false);
  }
}