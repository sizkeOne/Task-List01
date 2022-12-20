import { Component, Input } from '@angular/core';
import { Task } from '../../task'
import { TASKS } from '../../mock-task'
@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {

  @Input() task: Task = TASKS[0]; 
}
