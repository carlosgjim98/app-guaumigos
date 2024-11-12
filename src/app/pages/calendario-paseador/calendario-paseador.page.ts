import { Component, OnInit, ViewChild } from '@angular/core';
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
  selector: 'app-calendario-paseador',
  templateUrl: './calendario-paseador.page.html',
  styleUrls: ['./calendario-paseador.page.scss'],
})
export class CalendarioPaseadorPage implements OnInit {

  
  
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
  
  public datetime;
  selectedDate: string;
  public elementSelected: Element;

  public eventsCalendar: EventInput[];

  public allEvents: any[] = [];
  public eventsSelectedDate: any;
  public dateSelected: any;

  constructor(
    private modalController: ModalController,
  ) { }

  
  
  

  ngOnInit() {
    let dateToday = new Date();
    dateToday.setDate(dateToday.getDate() - 7);
    let index = 0;
  
    // Si hay una fecha seleccionada, puedes usarla como base
    let baseDate = this.selectedDate ? new Date(this.selectedDate) : dateToday;
  
    for (let i = 0; i < 50; i++) {
      // Creamos una nueva fecha basada en `baseDate` (puede ser la seleccionada o la por defecto)
      let newDate = new Date(baseDate);
      // Sumamos `i` días a la fecha base.
      newDate.setDate(baseDate.getDate() + i);
      // Convertimos la fecha a formato YYYY-MM-DD.
      let formattedDate = newDate.toISOString().split('T')[0];
      
      // Generamos una hora aleatoria.
      let randomHours = Math.floor(Math.random() * 24);
      let randomMinutes = Math.floor(Math.random() * 60);
      let randomSeconds = Math.floor(Math.random() * 60);
      let formattedTime = `${String(randomHours).padStart(2, '0')}:${String(randomMinutes).padStart(2, '0')}:${String(randomSeconds).padStart(2, '0')}`;
  
      // Definimos un color arbitrario para cada fecha.
      let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      
      // Añadimos el objeto con la fecha (como string) y color al array.
      this.allEvents.push({ id: index, title: 'Paseo del dia con Moka', date: formattedDate , time: formattedTime, color: color, class: 'color2' });
      index++;
  
      if(Math.random() < 0.5) {
        let randomHours = Math.floor(Math.random() * 24);
        let randomMinutes = Math.floor(Math.random() * 60);
        let randomSeconds = Math.floor(Math.random() * 60);
        let formattedTime = `${String(randomHours).padStart(2, '0')}:${String(randomMinutes).padStart(2, '0')}:${String(randomSeconds).padStart(2, '0')}`;
        let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        this.allEvents.push({ id: index, title: 'Paseo del dia con Toby', date: formattedDate , time: formattedTime, color: color , class: 'color2'});
        index++;
      }
  
      if(Math.random() < 0.5) {
        let randomHours = Math.floor(Math.random() * 24);
        let randomMinutes = Math.floor(Math.random() * 60);
        let randomSeconds = Math.floor(Math.random() * 60);
        let formattedTime = `${String(randomHours).padStart(2, '0')}:${String(randomMinutes).padStart(2, '0')}:${String(randomSeconds).padStart(2, '0')}`;
        let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        this.allEvents.push({ id: index, title: 'Paseo del dia con Kira', date: formattedDate , time: formattedTime, color: color ,class: 'color1'});
        index++;
      }
    }
  
    console.log("LOG EVENTS EXAMPLES", this.allEvents);
  }
  


  ionViewDidEnter(): void {
    this.eventsCalendar = [];
  
    this.allEvents.forEach(eventDate => {
      this.eventsCalendar.push({ title: 'Prueba', start: eventDate.date });
    });
  
    this.calendarOptions.events = this.eventsCalendar;
    this.calendarComponent.options = this.calendarOptions;
  
    setTimeout(() => {
      // No asignamos la clase 'selected' al día actual
      // Eliminamos la parte que selecciona el día actual
      // Así que ya no estamos manipulando manualmente el día actual
      this.selectEventsToday();  // Solo seleccionar eventos de hoy sin aplicar la clase 'selected'
    }, 500);
  }
  



  handleDateClick(arg) {
    console.log("EVENT DATE CLICK OR SELECT ", arg);
    console.log("DATE CLICK", arg.dateStr);
  
    this.dateSelected = arg.dateStr;
  
    // Obtener la fecha actual
    const today = new Date().toISOString().split('T')[0];  // 'YYYY-MM-DD'
  
    // Si el día clickeado es hoy, evitar que se marque
    if (arg.dateStr === today) {
      console.log("Hoy no se puede seleccionar.");
      return;  // Salir de la función si es el día actual
    }
  
    // Remover la clase 'selected' de todos los días previamente seleccionados
    const allSelectedDays = document.querySelectorAll('.fc-daygrid-day-number.selected');
    allSelectedDays.forEach(day => {
      day.classList.remove('selected');
    });
  
    // Agregar la clase 'selected' al número del día que fue clickeado
    const dayNumberElement = arg.dayEl.querySelector('.fc-daygrid-day-number');
    if (dayNumberElement) {
      dayNumberElement.classList.add('selected');
    }
  
    this.elementSelected = arg.dayEl;
  
    // Filtrar eventos para el día seleccionado
    let events = this.allEvents.filter(element => element.date == arg.dateStr);
    console.log("events filters this date", events);
  
    this.eventsSelectedDate = {
      date: this.dateSelected,
      allEvents: events
    };
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

  getDate(date: string): string {
    // Parseamos la fecha desde la cadena ISO a un objeto Date
    let fechaParseada = parseISO(date);
  
    // Formateamos la fecha en formato numérico `dd/MM/yyyy`
    let formattedDate = format(fechaParseada, "dd/MM/yyyy");
  
    return formattedDate;
  }
  

  getTime(timeString: string): string {
    if (timeString.length === 8) {
      // Parseamos la cadena de tiempo a un objeto Date usando 'HH:mm:ss' como formato de entrada
      let date = parse(timeString, 'HH:mm:ss', new Date());
  
      // Formateamos la hora en formato de 12 horas con AM/PM
      let formattedTime = format(date, 'hh:mm a', { locale: es });
  
      // Convertimos AM/PM a A.M. o P.M.
      formattedTime = formattedTime.replace('am', 'A.M.').replace('pm', 'P.M.');
  
      return formattedTime;
    }
    return timeString; // Si el formato no es el esperado, lo retorna tal cual.
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
