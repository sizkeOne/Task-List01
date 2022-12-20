import { Component, Input } from '@angular/core';
import { Task } from '../../task'
import { TASKS } from '../../mock-task'




@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
 @Input() tasks: Task[] = TASKS;
}
