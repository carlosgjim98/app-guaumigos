import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completar-perfil',
  templateUrl: './completar-perfil.page.html',
  styleUrls: ['./completar-perfil.page.scss'],
})
export class CompletarPerfilPage implements OnInit {

  dynamicHeaderText: string = 'Completa tu perfil';
  returnLink: string = '/registro-usuario-paseador';
 
  selectedDate: string | null = null;
  showDatePicker: boolean = false;  // Variable para mostrar el selector de fecha

  // Método para abrir el selector de fecha
  openDatePicker() {
    this.showDatePicker = true;
  }

  // Evento para manejar la selección de fecha
  onDateSelected(event: any) {
    this.selectedDate = event.detail.value;
    this.showDatePicker = false;  // Ocultar el selector después de seleccionar la fecha
  }

  ngOnInit() {}
}



