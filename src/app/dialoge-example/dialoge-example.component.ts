import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'rf-dialoge-example',
  templateUrl: './dialoge-example.component.html',
  styleUrls: ['./dialoge-example.component.scss']
})
export class DialogeExampleComponent implements OnInit {
  fromPage: string;
  fromDialog: string;
  constructor(
    public dialogRef: MatDialogRef<DialogeExampleComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {  this.fromPage = data.pageValue; }

  ngOnInit() {
  }
  delete() {
    this.dialogRef.close({event: 'close', data: this.fromPage }); 
  }

}
