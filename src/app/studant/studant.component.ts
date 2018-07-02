import { Component, OnInit, Input } from '@angular/core';
import { Studant } from './student.module';

@Component({
  selector: 'jad-studant',
  templateUrl: './studant.component.html',
  styleUrls: ['./studant.component.css']
})
export class StudantComponent implements OnInit {

  @Input() studant: Studant;

  constructor() { }

  ngOnInit() {
  }

}
