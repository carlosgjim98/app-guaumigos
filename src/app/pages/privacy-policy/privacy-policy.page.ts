import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  dynamicHeaderText: string = 'Política de Privacidad';
  returnLink: string = '/register';
  
  constructor() { }

  ngOnInit() {
  }

}
