import { Component, Input, OnInit } from '@angular/core';
import { note } from '../note';

@Component({
  selector: 'app-saved-notes',
  templateUrl: './saved-notes.component.html',
  styleUrls: ['./saved-notes.component.css']
})
export class SavedNotesComponent implements OnInit{

  @Input() received_array!:note[]

  ngOnInit(): void {
      
  }


  fake_heading:string = "";
  fake_text:string = "";


  more_info(Note:note){
    this.fake_heading = Note.heading;
    this.fake_text = Note.text;
  }

}
