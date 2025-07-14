import { Component, signal } from '@angular/core';
import {BookComponent } from './book/book';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [BookComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('book-management-system');
}
