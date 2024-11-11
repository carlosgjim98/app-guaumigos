import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-configurar-calendario',
  templateUrl: './configurar-calendario.page.html',
  styleUrls: ['./configurar-calendario.page.scss'],
})
export class ConfigurarCalendarioPage implements OnInit {


  dynamicHeaderText: string = 'Configurar calendario';
  private userRole: string; 
  public dynamicText: string;
  

  buttons=[
    {
      id : 1,
      text : 'Lunes',
      checked : false,
    },
    
    {
      id : 2,
      text : 'Martes',
      checked : false,
    },
    {
      id : 3,
      text : 'Miércoles',
      checked : false,
    },
    {
      id : 4,
      text : 'Jueves',
      checked : false,
    },
    {
      id : 5,
      text : 'Viernes',
      checked : false,
    },
    {
      id : 6,
      text : 'Sábado',
      checked : false,
    },
    {
      id : 7,
      text : 'Domingo',
      checked : false,
    },
  ]
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.userRole = sessionStorage.getItem('tipoUsuario'); 

    if (this.userRole === 'paseador') {
      this.dynamicText = '¿Cuándo realizarás los paseos como paseador?';
    } else if (this.userRole === 'empresa') {
      this.dynamicText = '¿Cuándo realizarás los servicios?';
    } else {
      this.dynamicText = '¿Cuándo realizarás los paseos?'; // Por defecto
    }
  }
    
  

  color(id){
    let index = this.buttons.findIndex(item => item.id === id);
    this.buttons[index].checked = !this.buttons[index].checked
  }

  

}
