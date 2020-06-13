import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'rf-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  mode = new FormControl('over');
  shouldRun = true;
  constructor() { }

  ngOnInit(): void {
  }

}
