import { PopUpComponent } from './../pop-up/pop-up.component';
import { Component, Input, OnInit } from '@angular/core';
import { note } from '../note';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-saved-notes',
  templateUrl: './saved-notes.component.html',
  styleUrls: ['./saved-notes.component.css']
})
export class SavedNotesComponent implements OnInit{

 @Input() received_array!:note[];

  local !:string|null;
  constructor(private DialogRef:MatDialog){
    // this.local = localStorage.getItem("notes");
    // console.log("heellooo");
    // console.log(this.local);

    //   this.received_array = JSON.parse(this.local!);

    //     this.local = localStorage.getItem("notes");
    // if(this.local == null){
    //   this.received_array = [];
    // }

    // else {
    //   this.received_array = JSON.parse(this.local);
    // }
  }
  ngOnInit(): void {

  }

  open_dialog(Note:note){
    this.DialogRef.open(PopUpComponent,{
      data : Note
    });
    
  }
  
  fake_heading!:string;
  fake_text!:string;


  // more_info(Note:note){
  //   this.fake_heading = Note.heading;
  //   this.fake_text = Note.text;
  // }

}
