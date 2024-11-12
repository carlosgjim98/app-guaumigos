import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil-empresa',
  templateUrl: './editar-perfil-empresa.page.html',
  styleUrls: ['./editar-perfil-empresa.page.scss'],
})
export class EditarPerfilEmpresaPage implements OnInit {
  dynamicHeaderText: string = 'Editar perfil';
 
  constructor() { }

  ngOnInit() {
  }

}
