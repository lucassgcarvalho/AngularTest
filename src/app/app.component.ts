import { Component } from '@angular/core';

import { Studant } from './studant/student.module';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  luke: Studant = { nome: 'Luke Skywalker', isJedi: true, tample: 'BundaGrande' };

  students: Studant[] = [
    { nome: 'Luke Skywalker', isJedi: true, tample: 'BundaGrande' },
    { nome: 'Han Solo', isJedi: true, tample: 'Cucumele' },
    { nome: 'Leia Puta', isJedi: false }
  ];

  // studants: Studant [] = {
  //   {nome: 'Luke Skywalker', isJedi: true, tample: 'BundaGrande'},
  //   {nome: 'Han Solo', isJedi: true, tample:"Cucumele"},
  //   {nome: 'Leia Puta', isJedi: false}
  // }

}
