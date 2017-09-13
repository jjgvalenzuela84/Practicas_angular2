import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cp1',
  templateUrl: './cp1.component.html',
  styleUrls: ['../cp.css']
})
export class Cp1Component implements OnInit {
  public aIdeas = ['hola','pepe','que pasa'];
  constructor() { }

  ngOnInit() {
  }

}
