import { getLocaleWeekEndRange } from '@angular/common';
import { note } from './note';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  note_array:note[] = [];

  local:string|null;

  constructor(){
    this.local = localStorage.getItem("notes");
    if(this.local == null){
      this.note_array = [];
    }

    else {
      this.note_array = JSON.parse(this.local);
    }
  }

  catch_note(Note:note){
    // console.log("Note catched");
    // console.log(Note);
    this.note_array.push(Note);
    localStorage.setItem("notes",JSON.stringify(this.note_array));
  }

  ngOnInit(): void {

  }
}
