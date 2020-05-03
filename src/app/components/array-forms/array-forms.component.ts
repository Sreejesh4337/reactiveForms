import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogeExampleComponent } from 'src/app/dialoge-example/dialoge-example.component';

@Component({
  selector: 'rf-array-forms',
  templateUrl: './array-forms.component.html',
  styleUrls: ['./array-forms.component.scss']
})
export class ArrayFormsComponent implements OnInit {
  myForm: FormGroup;
  animal: any;
  sendValue: any;
  constructor(private fb: FormBuilder,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      components: this.fb.array([])
    });
  }

  get phoneForms() {
    return this.myForm.get('components') as FormArray;
  }

  addPhones() {
    const phone = this.fb.group({
      component: [],
    });
    this.phoneForms.push(phone);
  }

  deleteForms(i) {
    this.phoneForms.removeAt(i);
  }

  openDialog(i) {
    const dialogRef = this.dialog.open(DialogeExampleComponent, {
      width: '600px',
      data: {pageValue: i}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.animal = result;
      if (result) {
        this.phoneForms.removeAt(i);
      }
    });
  }
}
