import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

// Data
import { books } from './data/books';

// Component
import BookComponent from './components/Books'

function BookList() {
 return (
  <section className='booklist'>
   {books.map((book) => {
    return <BookComponent key={book.id} {...book} />
   })}
  </section>
 )
}

ReactDom.render(<BookList />, document.getElementById('root'));