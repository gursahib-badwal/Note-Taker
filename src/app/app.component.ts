import { note } from './note';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  note_array:note[] = [
    // {heading: "Gursahib", text: "My name is Gursahib Singh"}
  ];

  catch_note(Note:note){
    // console.log("Note catched");
    // console.log(Note);
    this.note_array.push(Note);

  }
}
