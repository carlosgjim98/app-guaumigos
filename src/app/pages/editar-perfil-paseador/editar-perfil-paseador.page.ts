import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil-paseador',
  templateUrl: './editar-perfil-paseador.page.html',
  styleUrls: ['./editar-perfil-paseador.page.scss'],
})
export class EditarPerfilPaseadorPage implements OnInit {

  dynamicHeaderText: string = 'Editar perfil';
  returnLink: string = '/tabs/mi-perfil-paseador';

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

  ngOnInit() {
  }

}
