import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eulas',
  templateUrl: './eulas.page.html',
  styleUrls: ['./eulas.page.scss'],
})
export class EulasPage implements OnInit {

  dynamicHeaderText: string = 'EULA';
  returnLink: string = '/register';

  constructor() { }

  ngOnInit() {
  }

}
