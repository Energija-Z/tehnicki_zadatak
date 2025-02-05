import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalComponent } from '../modal/modal.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tablica',
  imports: [ModalComponent, NgIf],
  providers: [ModalComponent],
  templateUrl: './tablica.component.html',
  styleUrl: './tablica.component.css'
})

export class TablicaComponent {
  title = "tablica"
  data: any;
  private apiUrl = '';

  modal: boolean = false;

  /*

      const response = await fetch("https://dev.supracontrol.com:8080/api/User/", {
        method: 'GET',
        //body: JSON.stringify(""),
        headers: {'Content-Type': 'application/json', 'Authorization': 'key=Token'} 
      });
      
      if (!response.ok) 
      { 
          alert("Nay");
          console.error(response);
      }
      else{
        alert("Yea " + response)
      }
  */
      
  add(): void {
    document.addEventListener('click', async (event) => {
      this.modal = true;
    });
  }

  edit(): void {
    let tableTerm = prompt("Molimo unesite izraz u tablici");
    let editTerm = prompt("Molimo unesite izraz za promjenu");

    const search = document.querySelectorAll("tbody tr td");
    let editFlag = true;
    for(var i = 0; i < search.length; i++){
        if(tableTerm == search[i].textContent){
          search[i].textContent = editTerm;
          editFlag = false;
        }
      }
    if(editFlag)
      alert("Takav podatak ne postoji, ništa nije uređeno!");
    else
      alert("Promjena je unešena");
  }

  delete(): void {
    let searchTerm = prompt("Molimo unesite izraz");
    const search = document.querySelectorAll("tbody tr");
    let deleteFlag = true;

    for(let i = 0; i < search.length; i++){
      let row = search[i].childNodes;
      for(let j = 0; j < row.length; j++){
        if(row[j].textContent == searchTerm){
          search[i].remove();
          alert("Korisnik je izbrisan");
          deleteFlag = false;
          break;
        }
      }
    }
    if(deleteFlag)
      alert("Korisnik ne postoji");
    //console.log("");
  }

  search(): void {
    let searchTerm = prompt("Molimo unesite izraz");
    const search = document.querySelectorAll("tbody tr td");
    let searchFlag = true;
    for(var i = 0; i < search.length; i++){
        if(searchTerm == search[i].innerHTML){
          alert("Korisnik postoji");
          searchFlag = false;
          break;
        }
      }
    if(searchFlag)
      alert("Korisnik ne postoji!");
    //console.log("");
  }
}

