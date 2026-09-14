import { Component, signal } from '@angular/core';
import { CompPadre } from './shared/comp-padre/comp-padre';

@Component({
  selector: 'app-root',
  imports: [CompPadre],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('appTarea2');
}
