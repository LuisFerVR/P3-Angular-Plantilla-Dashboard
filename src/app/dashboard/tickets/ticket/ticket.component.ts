import { Component, input, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);

  onToggleDetails(){
    //Actualizar una señal sin método update de las señales
    //this.detailsVisible.set(!this.detailsVisible());
    //Alternativa con método update
    this.detailsVisible.update((wasVisible)=>!wasVisible);
  }
}
