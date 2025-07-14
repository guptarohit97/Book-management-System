import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../model/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './book.html',
  styleUrl: './book.css'
})
export class BookComponent {
  book: Book = {
  id: 0,
  title: '',
  author: ''
  };
  books:Book[]=[];
  nextId:number=1;


  addBooks():void{
    if(!this.book.title.trim()||!this.book.author.trim())
    {
      alert('Both title and author are required');
      return;
    }
    const newBook:Book={
      id:this.nextId++,
      title:this.book.title,
      author:this.book.author
    }
    this.books.push(newBook)
    this.book={id:0,title:'',author:''}
  }


}
