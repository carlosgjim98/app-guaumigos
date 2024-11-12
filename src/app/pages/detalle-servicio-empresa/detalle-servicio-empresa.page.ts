import { Component, OnInit ,ViewChild} from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-detalle-servicio-empresa',
  templateUrl: './detalle-servicio-empresa.page.html',
  styleUrls: ['./detalle-servicio-empresa.page.scss'],
})
export class DetalleServicioEmpresaPage implements OnInit {

 
  constructor(private navCtrl: NavController, ) { }
  
  goBack() {
    this.navCtrl.back(); // Usando Ionic NavController para hacer "go back"
  }

  ngOnInit() {
  }

}
