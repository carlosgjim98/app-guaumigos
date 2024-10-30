import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  templateUrl: './app-chat-header.component.html',
  styleUrls: ['./app-chat-header.component.scss'],
})
export class AppChatHeaderComponent implements OnInit {

  @Input() chatName: string;
  @Input() lastMessage: string;
  @Input() headerText: string = '';
  @Input() returnLink: string = '';
  @Input() esEspecial: boolean = false;
  @Input() userName: string = 'Usuario'; 
  @Input() userStatus: string = 'Desconectado';

  constructor() { }

  ngOnInit() {}

}
