import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-galeria',
  templateUrl: './editar-galeria.page.html',
  styleUrls: ['./editar-galeria.page.scss'],
})
export class EditarGaleriaPage implements OnInit {

  @Input() headerText: string = '';
  @Input() returnLink: string = '/galeria';
  @Input() esEspecial: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
