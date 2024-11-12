import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { ApiService } from 'src/app/services/api.service';
import { ModalController, NavController } from '@ionic/angular';
import { format, parse, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { ReminderPage } from '../reminder/reminder.page';

@Component({
  selector: 'app-configurar-calendario',
  templateUrl: './configurar-calendario.page.html',
  styleUrls: ['./configurar-calendario.page.scss'],
})
export class ConfigurarCalendarioPage implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    editable: true,
    firstDay: 1,
    locale: 'es',
    weekends: true,
    selectable: true,

    aspectRatio: 1,
    dateClick: (arg) => this.handleDateClick(arg),
    select: (arg) => this.handleDateClick(arg),
    eventClick(arg) {
        console.log(arg.event);
    },
    events: []
  };


  dynamicHeaderText: string = 'Configurar calendario';
  private userRole: string; 
  public dynamicText: string;

  public datetime;

  public elementSelected: Element;

  public eventsCalendar: EventInput[];

  public allEvents: any[] = [];
  public eventsSelectedDate: any;
  public dateSelected: any;
  

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
  

  constructor(private fb: FormBuilder, private modalController: ModalController) { }

  ngOnInit() {

    this.userRole = sessionStorage.getItem('tipoUsuario'); 

    if (this.userRole === 'paseador') {
      this.dynamicText = '¿Cuándo realizarás los paseos como paseador?';
    } else if (this.userRole === 'empresa') {
      this.dynamicText = '¿Cuándo realizarás los servicios?';
    } else {
      this.dynamicText = '¿Cuándo realizarás los paseos?'; // Por defecto
    }

    let dateToday = new Date();
    dateToday.setDate(dateToday.getDate() - 7);
    let index = 0;

  }
    
  

  color(id){
    let index = this.buttons.findIndex(item => item.id === id);
    this.buttons[index].checked = !this.buttons[index].checked
  }

  ionViewDidEnter(): void {
    this.eventsCalendar = [];

    this.allEvents.forEach(eventDate => {
      
      this.eventsCalendar.push(
        { title: 'Prueba', start: eventDate.date , color:eventDate.color },
      )

    });

    this.calendarOptions.events = this.eventsCalendar;
    this.calendarComponent.options = this.calendarOptions;



    setTimeout(() => {
      // Selecciona todos los elementos td con las clases específicas
      let td = document.querySelector('.fc .fc-daygrid-day.fc-day-today');

      // Añade la clase 'selected' a cada uno de esos elementos
      this.elementSelected = td;

      td.classList.add('selected');
    
      this.selectEventsToday();
    }, 500);



}



handleDateClick(arg) {

  console.log("EVENT DATE CLICK OR SELECT ", arg);
  
  console.log("DATE CLICK",arg.dateStr);

  this.dateSelected = arg.dateStr;

  if(this.elementSelected){
    this.elementSelected.classList.remove('selected');
  }

  this.elementSelected = arg.dayEl;

  arg.dayEl.classList.add('selected');

  let events = this.allEvents.filter(element => element.date == arg.dateStr);
     
  console.log("events filters this date", events);
  

  this.eventsSelectedDate = {
    date: this.dateSelected,
    allEvents: events
  }
  console.log("EVENTS SELECTED DATE", this.eventsSelectedDate);
  
}



public selectEventsToday(){
  let today = new Date();

  // Format the date as 'YYYY-MM-DD'
  let formattedDate = format(today, 'yyyy-MM-dd');
  let events = this.allEvents.filter(element => element.date == formattedDate);

  this.dateSelected = formattedDate;

  console.log("event filter", events);
  
  this.eventsSelectedDate = {
    date: this.dateSelected,
    allEvents: events
  }

  console.log("EVENTS SELECTED DATE", this.eventsSelectedDate);
}

getDate(date){
  let fechaParseada = parseISO(date);
  let formattedDate = format(fechaParseada, "EEEE, d MMM", { locale: es });
  return formattedDate;
}

getTime(timeString: string){

  if(timeString.length == 8){

    return timeString.substring(0,6);

  }

  // Parse the time string into a Date object
  let date = parse(timeString, 'HH:mm:ss', new Date());

  // Format the Date object to the desired format
  let formattedTime = format(date, 'H:mm a', { locale: es });

  // Replace 'AM'/'PM' with 'h'
  let finalFormattedTime = formattedTime.replace('AM', 'h').replace('PM', 'h');

  // Output the formatted time
  return finalFormattedTime; 
}


public async addReminder(){
  const modal = await this.modalController.create({
    component: ReminderPage,
    backdropDismiss: false,
    presentingElement: await this.modalController.getTop(),
    mode: 'ios',
    componentProps: {
      date: this.dateSelected,
    }
  });


  modal.onDidDismiss().then(dataReturned => {

    console.log("REMINDER AÑADIDO", dataReturned.data);

    if(dataReturned.role == 'reminder'){
      let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      
      this.eventsCalendar.push(
        { title: 'RECORDATORIO', start: dataReturned.data.date , color:color},
      )

      this.allEvents.push(
        { id: String(Math.random()*9999) ,title: 'RECORDATORIO', date: dataReturned.data.date , color:color, class: 'reminder'},
      )

      this.calendarOptions.events = [];
      this.calendarComponent.options = this.calendarOptions;
      this.calendarComponent.getApi().refetchEvents();

      setTimeout(() => {
        this.calendarOptions.events = this.eventsCalendar;
        this.calendarComponent.options = this.calendarOptions;
        this.calendarComponent.getApi().refetchEvents();
      }, 200);



    }
    

  });

  return await modal.present();
}


  

}
