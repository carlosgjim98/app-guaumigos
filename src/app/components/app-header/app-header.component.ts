import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent  implements OnInit {

  @Input() headerText: string = '';
  @Input() returnLink: string = '';
  @Input() esEspecial: boolean = false;
  
  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back(); // Usando Ionic NavController para hacer "go back"
  }
  ngOnInit() {}

}


