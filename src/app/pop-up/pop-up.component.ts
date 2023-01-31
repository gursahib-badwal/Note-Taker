import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { note } from '../note';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
    received_note!:note;
    constructor(@Inject(MAT_DIALOG_DATA) public data:note){
        this.received_note = data;
    }

    close_pop(){
      // this.dialogRef.close();
    }
}
